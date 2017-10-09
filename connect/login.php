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

        	$query = sprintf(
		        'SELECT * FROM instructors WHERE email = "%s"',
		        mysqli_real_escape_string($connection, $email)
		    );
		    $result = mysqli_query($connection, $query);
	        if (mysqli_num_rows($result) > 0) {
	        	$row = mysqli_fetch_array($result);
	        	echo "<script>alert('".$row['first_name']."');</script>";
	        	$_SESSION['id'] = $row['id'];
	        	$_SESSION['firstname'] = $row['first_name'];
	        	$_SESSION['lastname'] = $row['last_name'];
	        	$_SESSION['city'] = $row['city'];
		    }
		    db_close($result, $connection);
        	header('Location: ../html/payroll.php');
        	exit;       
	    }
	    db_close($result, $connection);
	}
	header('Location: ../staff/index.php');
    exit;
?>