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
        
        echo $email;
        echo $password;
	    
	    $query = sprintf(
	        'SELECT * FROM instructor WHERE email = "%s"',
	        mysqli_real_escape_string($conn, $email)
	    );
	    $result = mysqli_query($conn, $query);
	    echo "SOMETHING1";
	    if (!$result) {
	        $error = sprintf('Query Failed: %s', mysql_error());
            echo $error;
        }
        echo "SOMETHING2";
        if (mysqli_num_rows($result) > 0) {
        	$row_instructor = mysqli_fetch_array($result);
       		$firstname = $row_instructor['first_name'];
       		echo "NAME: ".$firstname;
        	$lastname = $row_instructor['last_name'];
	        $instructor_id = $row_instructor['instructor_id'];
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
