<?php
	session_start();
	if(session_destroy()) {
		header("Location: ../homepage.php"); // Redirecting To Home Page
	}
?>
