<?php
    function get_location($conn, $city) {
        $query = sprintf(
            "SELECT * FROM `schools` WHERE city = '%s' LIMIT 1",
            mysqli_real_escape_string($conn, $city)
        );
        $result_city = mysqli_query($conn, $query);
        if (!$result_city) {
            $error = sprintf("Query Failed: %s", mysql_error());
            echo $error;
        }
        else if (mysqli_num_rows($result_city) > 0) {
            $row_city = mysqli_fetch_array($result_city);
            $region = $row_city['region'];
            $query = sprintf(
                "SELECT * FROM `schools` WHERE `region` = '%s'",
                mysqli_real_escape_string($conn, $region)
            );
            $result_region = mysqli_query($conn, $query);
            if (!$result_region) {
                $error = sprintf("Query Failed: %s", mysql_error());
                echo $error;
            }
            else if (mysqli_num_rows($result_region) > 0) {
                $locations = Array();
                while ($row_region = mysqli_fetch_array($result_region)){
                    array_push($locations, $row_region['School Name']);
                }
            }
        }
    }  
?>