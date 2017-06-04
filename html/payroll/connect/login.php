<?php
	include('../db_utils/connect.php');
	if (!isset($_SESSION)) {
		@session_start();
	}
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
	        $instructor_id = $row_instructor['ID'];
	        $city = $row_instructor['city'];

            $_SESSION['email'] = $email;
            $_SESSION['firstname'] = $firstname;
            $_SESSION['lastname'] = $lastname;
            $_SESSION['id'] = $instructor_id;
            $_SESSION['city'] = $city;
	        header('Location: ../payroll.php');
	        mysqli_close($conn);
	        exit;
	    }    
	}
	header('Location: ../index.php');
    exit;
?>
