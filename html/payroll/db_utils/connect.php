<?php
function db_connect() {
    /*
    $servername = "localhost:3306";
    $username = "bytecamp_test2";
    $password = "18888082983Unicorn";

    // Create connection
    $conn = mysql_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysql_connect_error());
    }
           
    mysql_select_db(bytecamp_test);
    */
    $host = "localhost";
    $user = "bytecamp_test2";
    $pass = "18888082983Unicorn";
    $db = "bytecamp_test";
    $port = 3306;
    $connection = mysqli_connect($host, $user, $pass, $db, $port) or die (mysql_error());

    return $connection;
    
}
?>
