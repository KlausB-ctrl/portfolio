<?php

if (isset($_POST['submit'])) {
    $name = $POST['name'];
    $mailFrom = $POST['email'];
    $subject = $POST['subject'];
    $message = $POST['message'];

    $mailTo = "ryanantjackson@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}

