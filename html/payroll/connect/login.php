<?php
	include('../db_utils/connect.php');

	if (!isset($_SESSION)) {
		@session_start();
	}
	if (isset($_POST['submit-login'])) {
	    $email = stripslashes($_POST['email']);
	    $password = stripslashes($_POST['password']);
        $password = $password . 'somesortofsalt';
		$connection = db_connect();
	    $query = sprintf(
	        'SELECT * FROM accounts WHERE instructor_email = "%s"',
	        mysqli_real_escape_string($connection, $email)
	    );
	    $result = mysqli_query($connection, $query);
        if (mysqli_num_rows($result) > 0) {
        	$_SESSION['email'] = $email;
        	header('Location: ../payroll.php');        
	    } 
        db_close($result, $connection);
        exit;
	}
	header('Location: ../index.php');
    exit;
?>