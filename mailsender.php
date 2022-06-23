<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "paulinus@paulinuslambert.com";
    $mailCc = "lambertpaulinus@gmail.com";
    $subject = "Message from someone at paulinuslambert.com";
    $headers = "From: ".$email;
    $txt = "You have message from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers, "Cc: ".$mailCc);
    header("Location: ./index.php");
}