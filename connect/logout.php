<?php
	session_start();
	if(session_destroy()) {
		header("Location: ../staff/index.php"); // Redirecting To Home Page
		exit;
	}
?>
