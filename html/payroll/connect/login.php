<?php
    //checks to see if the session is started before starting it.
	if(!isset($_SESSION))
    {
        session_start();
    }
	$error = '';
	// Check to make sure the username and password fields have been filled
	if (isset($_POST['submit_login'])) {
	    $username = stripslashes($_POST['username']);
	    $password = stripslashes($_POST['password']);
        $password = $password . "somesortofsalt";
	    // Connection to mysql
	    $conn = db_connect();
	    // Check username and password against accounts
	    $query = sprintf(
	        "SELECT * FROM accounts WHERE username = '%s' AND password = SHA2('%s', 256)",
	        mysqli_real_escape_string($conn, $username),
	        mysqli_real_escape_string($conn, $password)
	    );
	    $result = mysqli_query($conn, $query);
	    // Check for successful user look up
	    if (!$result) {
	        $error = sprintf("Query Failed: %s", mysql_error());
            echo $error;
        }
        if (mysqli_num_rows($result) > 0) {
            $_SESSION['login_user'] = $username;
	        header("location: homepage.php");
	    }
	    mysqli_close($conn);
	}
?>
