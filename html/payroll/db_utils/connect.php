<?php
include "../../../../../inc/dbinfo.inc";

function db_connect() {
    $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
    if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
    $database = mysqli_select_db($connection, DB_DATABASE);
    return $connection;
}

function db_close() {
    mysqli_free_result($result);
    mysqli_close($connection);
}
?>
