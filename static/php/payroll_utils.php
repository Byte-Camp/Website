<?php
    function get_period() {
        $months = array('January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        $weekdays = array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        
        $start_of_year = date("Y-m-d", strtotime("Monday", mktime(0, 0, 0, 1, 1)));
        $today = date("Y-m-d"); $i = 2;
        $startDate = $start_of_year;
        $weekDates = array();

        $tD = date_parse_from_format("Y-m-d", $today);
        do {        
            $startDate = date("Y-m-d", strtotime("+2 weeks", strtotime($startDate)));
            $sD = date_parse_from_format("Y-m-d", $startDate);
            array_push($weekDates,$sD);
        } 
        while((int)$sD['month'] < (int)$tD['month'] || ((int)$sD['month'] == (int)$tD['month']) && (int)$sD['day'] < (int)$tD['day']);
        
        $start = $weekDates[sizeof($weekDates)-2];
        $end = $weekDates[sizeof($weekDates)-1];
        $startMonth = $start['month'];
        $endMonth = $end['month'];
        $startDay = $start['day'];
        $endDay = $end['day'];

        $days = array();
        $dates = array();
        $nextDay = $startDate;
        for ($i=0; $i<14; $i++){
            $nextDay = date("Y-m-d", strtotime("-1 day", strtotime($nextDay)));
            $weekday = date("l",strtotime($nextDay));
            if (strcmp($weekday, 'Saturday') != 0 && strcmp($weekday, 'Sunday') != 0) {
                $nD = date_parse_from_format("Y-m-d", $nextDay);
                array_push($days,$nD['day']);
                array_push($dates,$nextDay);
            }  
        }
        $days = array_reverse($days);
        $dates = array_reverse($dates);
        foreach ($dates as &$date){
            $date = $date.' 00:00:00';
        }
        unset($date);
        $payPeriod = $months[$startMonth-1].' '.$startDay.' to '.$months[$endMonth-1].' '.$endDay;

        $_PERIOD['payPeriod'] = $payPeriod;
        $_PERIOD['days'] = $days;
        $_PERIOD['months'] = $months;
        $_PERIOD['weekdays'] = $weekdays;
        $_PERIOD['dates'] = $dates;

        return $_PERIOD;
    }

    function get_schedule($instructor_id, $dates) {
        $connection = db_connect();
        $query = sprintf(
            "SELECT * 
            FROM `program dates` 
            WHERE 
                ID IN (SELECT program_ID FROM `instructor instance` WHERE instructor_ID = '%s')",
            mysqli_real_escape_string($connection, $instructor_id)
        );
        $result = mysqli_query($connection, $query);
        if (!$result) {
            $error = sprintf("Query Failed: %s", mysql_error());
            echo $error;
        }
        else if (mysqli_num_rows($result) > 0) {
            $program = $dates; $startTime = $dates; $endTime = $dates; $total = $dates;
            while ($row_inst_instance = mysqli_fetch_array($result)){
                $date = $row_inst_instance['date']; 

                if (($key = array_search($date, $program)) !== false){
                    $program_ID = $row_inst_instance['program ID'];
                    $query = sprintf(
                        "SELECT * FROM `programs` WHERE ID = '%s'",
                        mysqli_real_escape_string($connection, $program_ID)
                    );
                    $result = mysqli_query($connection, $query);
                    if (!$result) {
                        $error = sprintf("Query Failed: %s", mysql_error());
                        echo $error;
                    }
                    else if (mysqli_num_rows($result) > 0) {
                        $row_programs = mysqli_fetch_array($result);
                        
                        $s = date('h:i',strtotime($row_programs['starttime']));
                        $e = date('h:i',strtotime($row_programs['endtime']));
                        $s = explode(":", $s); $e = explode(":", $e);
                        $t = (abs((int)$e[0] - (int)$s[0]) + abs((int)$e[1] - (int)$s[1])/60.0) + 1;
                        
                        $program[$key] = '<h4 class="square-info loc-name hidden-xs hidden-sm"> '.$row_programs['program'].' </h4>';
                        $startTime[$key] = 'Start Time:<br>'.implode(':',$s).' am';
                        $endTime[$key] = 'End Time:<br>'.implode(':',$e).' pm';
                        $total[$key] = 'Total:<br>'.$t.' hours';
                    }
                }
            }
            for ($i=0;$i<sizeof($program);$i++) {
                if (strtotime($program[$i])){
                    $program[$i] = '<h4 class="square-info loc-name"> <br><br>NO WORK TODAY </h4>';
                    $startTime[$i] = '';
                    $endTime[$i] = '';
                    $total[$i] = '';
                }   
            }
            $_INFO['program'] = $program;
            $_INFO['startTime'] = $startTime;
            $_INFO['endTime'] = $endTime;
            $_INFO['total'] = $total;
        }
        db_close($result, $connection);
        return $_INFO;
    }

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