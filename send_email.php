<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form fields and sanitize the input
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Email to which the form data should be sent
    $to = 'ardemo786@gmail.com';  // Owner's email address
    $subject = 'New Contact Form Submission';
    
    // Construct the email content
    $email_content = "Name: $name\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Email sent successfully - redirect to contact us page
        header("Location: contact.html?status=success");
        exit;
    } else {
        // Email sending failed - redirect to contact us page with error
        header("Location: contact.html?status=error");
        exit;
    }
} else {
    // Handle the case where the form is not submitted properly
    echo 'Invalid request.';
}
?>
