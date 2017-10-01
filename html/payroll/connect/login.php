<html>
<body>
<h1>Sample page</h1>
<?php
	include('../db_utils/connect.php');
	$connection = db_connect();
	VerifyEmployeesTable($connection); 

	/* If input fields are populated, add a row to the Employees table. */
	$employee_name = htmlentities($_POST['Name']);
	$employee_address = htmlentities($_POST['Address']);

	if (strlen($employee_name) || strlen($employee_address)) {
	AddEmployee($connection, $employee_name, $employee_address);
	}
?>

<!-- Input form -->
<form action="<?PHP echo $_SERVER['SCRIPT_NAME'] ?>" method="POST">
  <table border="0">
    <tr>
      <td>Name</td>
      <td>Address</td>
    </tr>
    <tr>
      <td>
        <input type="text" name="Name" maxlength="45" size="30" />
      </td>
      <td>
        <input type="text" name="Address" maxlength="90" size="60" />
      </td>
      <td>
        <input type="submit" value="Add Data" />
      </td>
    </tr>
  </table>
</form>

<!-- Display table data. -->
<table border="1" cellpadding="2" cellspacing="2">
  <tr>
    <td>ID</td>
    <td>Name</td>
    <td>Address</td>
  </tr>

<?php

$result = mysqli_query($connection, "SELECT * FROM Employees"); 

while($query_data = mysqli_fetch_row($result)) {
  echo "<tr>";
  echo "<td>",$query_data[0], "</td>",
       "<td>",$query_data[1], "</td>",
       "<td>",$query_data[2], "</td>";
  echo "</tr>";
}
?>

</table>

</body>
</html>

<?php
/*
	echo "<script>alert('hi');</script>";
	include('../db_utils/connect.php');
	if (!isset($_SESSION)) {
		@session_start();
	}
	if (isset($_POST['submit-login'])) {
	    $email = stripslashes($_POST['email']);
	    $password = stripslashes($_POST['password']);
        $password = $password . 'somesortofsalt';
		$conn = db_connect();
	    echo "<script>alert('".$email."');</script>";
	    echo "<script>alert('".$password."');</script>";

	    $query = sprintf(
	        'SELECT * FROM accounts WHERE instructor_email = "%s"',
	        mysqli_real_escape_string($conn, $email)
	    );
	    $result = mysqli_query($conn, $query);
	    echo "<script>alert('SOMETHING1');</script>";
	    if (!$result) {
	        $error = sprintf('Query Failed: %s', mysql_error());
            echo $error;
        }
        echo "<script>alert('SOMETHING2');</script>";
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
	//header('Location: ../index.php');
    //exit;
*/
?>
