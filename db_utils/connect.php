<?php
include "../../../inc/dbinfo.inc";

function db_connect() {
    $connection = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);
    if (mysqli_connect_errno()) echo "Failed to connect to MySQL: " . mysqli_connect_error();
    return $connection;
}

function db_close($result, $connection) {
    mysqli_free_result($result);
    mysqli_close($connection);
}
?>
