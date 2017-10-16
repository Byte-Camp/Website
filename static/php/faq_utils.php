 <?php
	$to = "adar@bytecamp.ca";
	$subject = "Email From Website - FAQ";
	$message = $_POST['question'];
	$headers = "From: adar@bytecamp.ca";
	if(mail($to, $subject, $message, $headers)) {
		echo "Sent!";
	} else {
		echo "Not Sent";
	}
?> 