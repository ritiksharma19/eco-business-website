<?php
// Receives the enquiry form, stores the lead in data/enquiries.csv and emails a notification.
require __DIR__ . '/config.php';

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function respond(bool $ok, string $error = '', int $code = 200): void {
    global $wantsJson;
    if ($wantsJson) {
        http_response_code($code);
        header('Content-Type: application/json');
        echo json_encode(['ok' => $ok, 'error' => $error]);
    } elseif ($ok) {
        header('Location: thank-you.html', true, 303);
    } else {
        http_response_code($code);
        echo '<p>' . htmlspecialchars($error) . '</p><p><a href="javascript:history.back()">Go back</a></p>';
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed', 405);
}

// Honeypot: bots fill the hidden "website" field — pretend success and discard.
if (!empty($_POST['website'])) {
    respond(true);
}

function field(string $key, int $max = 200): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = preg_replace('/[\x00-\x09\x0B-\x1F\x7F]/u', '', $v); // strip control chars (keep newlines)
    return mb_substr($v, 0, $max);
}

$lead = [
    'date'       => date('Y-m-d H:i:s'),
    'name'       => field('name', 100),
    'company'    => field('company', 150),
    'email'      => field('email', 150),
    'phone'      => field('phone', 30),
    'location'   => field('location', 150),
    'product'    => field('product', 100),
    'quantity'   => field('quantity', 100),
    'buyer_type' => field('buyer_type', 60),
    'message'    => field('message', 3000),
    'source'     => field('source', 60),
    'ip'         => $_SERVER['REMOTE_ADDR'] ?? '',
];

$errors = [];
if (mb_strlen($lead['name']) < 2)                          $errors[] = 'name';
if (!filter_var($lead['email'], FILTER_VALIDATE_EMAIL))    $errors[] = 'email';
if (!preg_match('/^[+\d][\d\s-]{7,16}$/', $lead['phone'])) $errors[] = 'phone';
if ($lead['product'] === '')                               $errors[] = 'product';
if (mb_strlen($lead['message']) < 10)                      $errors[] = 'message';
if (($_POST['consent'] ?? '') !== 'yes')                   $errors[] = 'consent';
if ($errors) {
    respond(false, 'Please check: ' . implode(', ', $errors), 422);
}

// Simple rate limit: max 5 enquiries per IP per hour
$rateFile = sys_get_temp_dir() . '/rsef_' . md5($lead['ip']);
$hits = array_filter(
    is_file($rateFile) ? (array)json_decode((string)file_get_contents($rateFile), true) : [],
    fn($t) => $t > time() - 3600
);
if (count($hits) >= 5) {
    respond(false, 'Too many enquiries. Please call or email us directly.', 429);
}
$hits[] = time();
@file_put_contents($rateFile, json_encode(array_values($hits)));

// Save to CSV (cells starting with = + - @ are prefixed so Excel does not run them as formulas)
$dir = dirname(LEADS_FILE);
if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}
$isNew = !is_file(LEADS_FILE);
$fh = fopen(LEADS_FILE, 'a');
if (!$fh) {
    respond(false, 'Could not save enquiry', 500);
}
flock($fh, LOCK_EX);
if ($isNew) {
    fwrite($fh, "\xEF\xBB\xBF"); // UTF-8 BOM so Excel shows Hindi/Marathi text correctly
    fputcsv($fh, array_values(LEAD_FIELDS));
}
$row = array_map(fn($v) => preg_match('/^[=+\-@]/', $v) ? "'" . $v : $v, array_values($lead));
fputcsv($fh, $row);
flock($fh, LOCK_UN);
fclose($fh);

// Email notification (failure here does not lose the lead — it is already saved)
$subject = 'New Enquiry: ' . $lead['product'] . ' – ' . $lead['name'];
$body = "New enquiry received on the RS EcoFiber website\n\n";
foreach (LEAD_FIELDS as $key => $label) {
    $body .= str_pad($label . ':', 14) . $lead[$key] . "\n";
}
$headers = [
    'From: RS EcoFiber Website <' . FROM_EMAIL . '>',
    'Reply-To: ' . str_replace(["\r", "\n"], '', $lead['email']),
    'Content-Type: text/plain; charset=UTF-8',
];
@mail(NOTIFY_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

respond(true);
