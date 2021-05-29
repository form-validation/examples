<?php
// Replace with your secrey key
$secretKey = '___REPLACE_WITH_YOUR_SECRECT_KEY___';

$url = 'https://www.google.com/recaptcha/api/siteverify?secret='
        . urlencode($secretKey)
        . '&response=' . urlencode($_POST['___g-recaptcha-token___']);

$result = file_get_contents($url);
$return = json_decode($result, true);
$return["message"] = "The captcha is NOT valid";

header('Content-Type: application/json');
echo json_encode($return);