<html>
<body>
<h1>Sample page</h1>
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
		VerifyAccountsTable($connection); 
	    echo "<script>alert('".$email."');</script>";
	    echo "<script>alert('".$password."');</script>";

	    $query = sprintf(
	        'SELECT * FROM accounts WHERE instructor_email = "%s"',
	        mysqli_real_escape_string($connection, $email)
	    );
	    $result = mysqli_query($connection, $query);
        if (mysqli_num_rows($result) > 0) {
        	echo "YAY";
        	header('Location: ../payroll.php');
        	/*$row_instructor = mysqli_fetch_array($result);
       		$firstname = $row_instructor['first_name'];
       		echo "NAME: ".$firstname;
        	$lastname = $row_instructor['last_name'];
	        $instructor_id = $row_instructor['instructor_id'];
	        $city = $row_instructor['city'];

            $_SESSION['email'] = $email;
            $_SESSION['firstname'] = $firstname;
            $_SESSION['lastname'] = $lastname;
            $_SESSION['id'] = $instructor_id;
            $_SESSION['city'] = $city;*/
	        
	    } 
        db_close();
        exit;
	}
	//header('Location: ../index.php');
    //exit;
?>

<?php
/*
$result = mysqli_query($connection, "SELECT * FROM accounts"); 

while($query_data = mysqli_fetch_row($result)) {
  echo "<tr>";
  echo "<td>",$query_data[0], "</td>",
       "<td>",$query_data[1], "</td>",
       "<td>",$query_data[2], "</td>";
  echo "</tr>";
}*/
?>

</body>
</html>