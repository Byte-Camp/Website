<?php
function db_connect() {
    $host = "bytecamp-db.cjniwxkrwxjh.us-east-2.rds.amazonaws.com";
    $user = "adminBC";
    $pass = "2201Chambers";
    $db = "byteDB";
    $port = 3306;
    $connection = mysqli_connect($host, $user, $pass, $db, $port) or die (mysql_error());

    return $connection;
    
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
