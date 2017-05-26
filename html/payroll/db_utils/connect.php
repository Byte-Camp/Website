<?php

// Function for connecting to the saiddit database
function db_connect() {

    $host = "localhost:3306";
    $user = "bytecamp_test2";
    $pass = "18888082983Unicorn";
    $db = "bytecamp_test";
    $port = 3306;

    // Connect to mysql using subsaiddit_sys user
    $connection = mysqli_connect($host, $user, $pass, $db, $port) or die (mysql_error());

    return $connection;
}

?>
