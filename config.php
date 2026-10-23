<?php
// RS EcoFiber — server settings. EDIT BEFORE UPLOADING.

// Where new enquiry notifications are emailed (comma-separate multiple addresses)
const NOTIFY_EMAIL = 'info@rsecofiber.com';           // TODO: your email

// "From" address for notification emails — should be an address on your own domain
const FROM_EMAIL = 'no-reply@rsecofiber.com';         // TODO: e.g. no-reply@yourdomain.com

// Password for the leads dashboard at /admin.php — CHANGE THIS to something strong
const ADMIN_PASSWORD = 'ChangeMe@2026';                // TODO

// CSV file where all enquiries are stored (folder is protected by data/.htaccess)
const LEADS_FILE = __DIR__ . '/data/enquiries.csv';

const LEAD_FIELDS = [
    'date'       => 'Date',
    'name'       => 'Name',
    'company'    => 'Company',
    'email'      => 'Email',
    'phone'      => 'Phone',
    'location'   => 'Location',
    'product'    => 'Product',
    'quantity'   => 'Quantity',
    'buyer_type' => 'Buyer Type',
    'message'    => 'Requirement',
    'source'     => 'Source Page',
    'ip'         => 'IP Address',
];

date_default_timezone_set('Asia/Kolkata');
