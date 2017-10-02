<?php
	function get_user() {
	    if(!isset($_SESSION)) { 
        	session_start(); 
        } 
        
	    if (isset($_SESSION['email'])) {
	    	include('../db_utils/connect.php');
	    	$connection = db_connect();
		    $query = sprintf(
		        'SELECT * FROM instructors WHERE email = "%s"',
		        mysqli_real_escape_string($connection, $_SESSION['email'])
		    );
		    $result = mysqli_query($connection, $query);
	        if (mysqli_num_rows($result) > 0) {
	        	$row = mysqli_fetch_array($result);
	        	echo "<script>alert('".$row['first_name']."');</script>";
	        	$_SESSION['firstname'] = $row['first_name'];
	        	$_SESSION['lastname'] = $row['last_name'];
	        	$_SESSION['id'] = $row['id'];
	        	$_SESSION['city'] = $row['city'];   
		    }
	        db_close($result, $connection);
	        return $_SESSION;
	    }
	    return NULL;
	}
?>
