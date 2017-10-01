<?php
function db_connect() {
    include "../../../../../inc/dbinfo.inc";
    /* Connect to MySQL and select the database. */
    $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
    if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
    $database = mysqli_select_db($connection, DB_DATABASE);
    return $connection;
}

/* Check whether the table exists and, if not, create it. */
function VerifyAccountsTable($connection) {
    if(!TableExists("accounts", $connection)) { 
        echo "<script>alert('Error with the Accounts Table.');</script>";
    } else {
        echo "<script>alert('Accounts Table is Functioning Correctly.');</script>";
    }
}

/* Check for the existence of a table. */
function TableExists($tableName, $connection) {
    $t = mysqli_real_escape_string($connection, $tableName);
    $d = mysqli_real_escape_string($connection, DB_DATABASE);
    $checktable = mysqli_query($connection, "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_NAME = '$t' AND TABLE_SCHEMA = '$d'");
    if(mysqli_num_rows($checktable) > 0) return true;
    return false;
}



/*
function db_connect() {
    $host = "localhost";
    $user = "bytecamp_test2";
    $pass = "18888082983Unicorn";
    $db = "bytecamp_test";
    $port = 3306;
    $connection = mysqli_connect($host, $user, $pass, $db, $port) or die (mysql_error());

    return $connection;
    
}
*/
?>

<!-- Clean up. -->
<?php

  mysqli_free_result($result);
  mysqli_close($connection);

?>
