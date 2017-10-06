 <?php
	$to = "adarguy10@gmail.com";
	$subject = "Email From Website - FAQ";
	$message = $_POST['question'];
	$headers = "From: adarguy10@gmail.com";
	if(mail($to, $subject, $message, $headers)) {
		echo "Sent!";
	} else {
		echo "Not Sent";
	}
?> 