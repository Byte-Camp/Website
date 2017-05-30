<?php
	include('../db_utils/connect.php');

	if (!isset($_SESSION)) {
		@session_start();
	}
	$error = '';
	if (isset($_POST['submit-login'])) {
	    $email = stripslashes($_POST['email']);
	    $password = stripslashes($_POST['password']);
        $password = $password . 'somesortofsalt';

	    $conn = db_connect();
	    $query = sprintf(
	        'SELECT * FROM instructors WHERE email = "%s"',
	        mysqli_real_escape_string($conn, $email)
	    );
	    $result = mysqli_query($conn, $query);

	    if (!$result) {
	        $error = sprintf('Query Failed: %s', mysql_error());
            echo $error;
        }
        if (mysqli_num_rows($result) > 0) {
        	$row_instructor = mysqli_fetch_array($result);
       		$firstname = $row_instructor['first name'];
        	$lastname = $row_instructor['last name'];

            $_SESSION['login_user'] = $email;
	        header('Location: ../payroll.php');
	        mysqli_close($conn);
	        exit;
	    }    
	}
?>
