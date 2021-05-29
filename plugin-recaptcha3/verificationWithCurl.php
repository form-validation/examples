<?php
// Replace with your secrey key
$secretKey = '___REPLACE_WITH_YOUR_SECRECT_KEY___';

// See https://developers.google.com/recaptcha/docs/verify#api-request
$fields = array(
    'secret'   => $secretKey,
    'response' => $_POST['___g-recaptcha-token___']
);

$postVars = '';
$sep = '';
foreach ($fields as $key => $value) {
    $postVars .= $sep . urlencode($key) . '=' . urlencode($value);
    $sep = '&';
}

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $postVars);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
$return = json_decode($result, true);
// You can customize the error message based on the score ($return["score"])
$return["message"] = "The captcha is NOT valid";

curl_close($ch);

header('Content-Type: application/json');
echo json_encode($return);