<?php
// Private leads dashboard: view and download all enquiries.
require __DIR__ . '/config.php';

session_start();
header('X-Robots-Tag: noindex, nofollow');

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

$loginError = '';
if (isset($_POST['password'])) {
    if (hash_equals(ADMIN_PASSWORD, (string)$_POST['password'])) {
        session_regenerate_id(true);
        $_SESSION['rsef_admin'] = true;
        header('Location: admin.php');
        exit;
    }
    sleep(2); // slow down password guessing
    $loginError = 'Incorrect password';
}

$loggedIn = !empty($_SESSION['rsef_admin']);

function readLeads(): array {
    if (!is_file(LEADS_FILE)) return [];
    $fh = fopen(LEADS_FILE, 'r');
    $rows = [];
    $header = true;
    while (($r = fgetcsv($fh)) !== false) {
        if ($header) { $header = false; continue; }
        $rows[] = array_map(fn($v) => ltrim($v, "'"), $r);
    }
    fclose($fh);
    return array_reverse($rows); // newest first
}

if ($loggedIn && isset($_GET['download'])) {
    header('Content-Type: text/csv; charset=UTF-8');
    header('Content-Disposition: attachment; filename="rs-ecofiber-enquiries-' . date('Y-m-d') . '.csv"');
    readfile(LEADS_FILE);
    exit;
}

$leads = $loggedIn ? readLeads() : [];
$q = trim($_GET['q'] ?? '');
if ($q !== '') {
    $leads = array_filter($leads, fn($r) => stripos(implode(' ', $r), $q) !== false);
}
$e = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
$cols = array_values(LEAD_FIELDS);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Enquiries Dashboard | RS EcoFiber</title>
  <style>
    body { font-family: system-ui, "Segoe UI", sans-serif; margin: 0; background: #f4f6f2; color: #1d231f; }
    header { background: #12321d; color: #fff; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
    header b { color: #f2c230; }
    a { color: #245c36; }
    header a { color: #f2c230; margin-left: 16px; }
    main { padding: 24px; }
    .login { max-width: 360px; margin: 12vh auto; background: #fff; padding: 32px; border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,.08); }
    input { width: 100%; padding: 11px 12px; border: 1.5px solid #ccd3c8; border-radius: 8px; font-size: 15px; box-sizing: border-box; }
    button, .btn { background: #f2c230; color: #12321d; border: 0; padding: 11px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none; display: inline-block; font-size: 14px; }
    .err { color: #b3261e; margin-top: 10px; }
    .bar { display: flex; gap: 12px; align-items: center; margin-bottom: 18px; flex-wrap: wrap; }
    .bar form { display: flex; gap: 8px; }
    .bar input { width: 260px; }
    .count { color: #5b665e; }
    .table-wrap { overflow-x: auto; background: #fff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,.06); }
    table { border-collapse: collapse; width: 100%; font-size: 14px; }
    th, td { padding: 10px 12px; border-bottom: 1px solid #eef0ea; text-align: left; vertical-align: top; }
    th { background: #1b4a2b; color: #fff; position: sticky; top: 0; white-space: nowrap; }
    td.msg { min-width: 260px; white-space: pre-wrap; }
    tr:hover td { background: #faf6ea; }
    .empty { padding: 40px; text-align: center; color: #5b665e; }
  </style>
</head>
<body>
<?php if (!$loggedIn): ?>
  <div class="login">
    <h2 style="margin-top:0">RS <span style="color:#d9a913">EcoFiber</span></h2>
    <p>Enquiries dashboard login</p>
    <form method="POST">
      <input type="password" name="password" placeholder="Password" autofocus required>
      <div style="margin-top:14px"><button type="submit">Login</button></div>
      <?php if ($loginError): ?><div class="err"><?= $e($loginError) ?></div><?php endif; ?>
    </form>
  </div>
<?php else: ?>
  <header>
    <div>RS <b>EcoFiber</b> — Client Enquiries</div>
    <div><a href="index.html" target="_blank">View website</a><a href="?logout=1">Logout</a></div>
  </header>
  <main>
    <div class="bar">
      <form method="GET"><input type="search" name="q" value="<?= $e($q) ?>" placeholder="Search name, phone, product…"><button type="submit">Search</button></form>
      <?php if (is_file(LEADS_FILE)): ?><a class="btn" href="?download=1">⬇ Download Excel (CSV)</a><?php endif; ?>
      <span class="count"><?= count($leads) ?> enquiries</span>
    </div>
    <div class="table-wrap">
      <?php if (!$leads): ?>
        <div class="empty">No enquiries yet.</div>
      <?php else: ?>
      <table>
        <thead><tr><?php foreach ($cols as $c): ?><th><?= $e($c) ?></th><?php endforeach; ?></tr></thead>
        <tbody>
        <?php foreach ($leads as $r): ?>
          <tr>
            <?php foreach ($r as $i => $v): $key = array_keys(LEAD_FIELDS)[$i] ?? ''; ?>
              <?php if ($key === 'email'): ?><td><a href="mailto:<?= $e($v) ?>"><?= $e($v) ?></a></td>
              <?php elseif ($key === 'phone'): ?><td style="white-space:nowrap"><a href="tel:<?= $e(preg_replace('/\s/', '', $v)) ?>"><?= $e($v) ?></a><br><a href="https://wa.me/<?= $e(preg_replace('/\D/', '', $v)) ?>" target="_blank">WhatsApp</a></td>
              <?php elseif ($key === 'message'): ?><td class="msg"><?= $e($v) ?></td>
              <?php else: ?><td><?= $e($v) ?></td><?php endif; ?>
            <?php endforeach; ?>
          </tr>
        <?php endforeach; ?>
        </tbody>
      </table>
      <?php endif; ?>
    </div>
  </main>
<?php endif; ?>
</body>
</html>
