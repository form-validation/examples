<?php
$targetFile = __DIR__ . '/' . basename($_FILES["avatar"]["name"]);
$success = move_uploaded_file($_FILES["avatar"]["tmp_name"], $targetFile);

$json = json_encode(array(
    'success' => $success,
));
echo $json;