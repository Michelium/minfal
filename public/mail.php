<?php

$name = $_POST['name'];
var_dump($name);exit;

$message = "<p>Hi!</p>";
$message .= "<p>Wazaaaaa $name</p>";

$to_email = 'info@minfal.nl';
$subject = 'Contactformulier inzending';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Biloo <noreply@minfal.nl>';

mail($to_email, $subject, $message, implode("\r\n", $headers));

?>
