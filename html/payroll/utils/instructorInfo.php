<?php
    function get_info($conn, $instructor_id, $dates) {
        $query = sprintf(
            "SELECT * 
            FROM `program dates` 
            WHERE 
                ID IN (SELECT program_ID FROM `instructor instance` WHERE instructor_ID = '%s')",
            mysqli_real_escape_string($conn, $instructor_id)
        );
        $result_inst_instance = mysqli_query($conn, $query);
        if (!$result_inst_instance) {
            $error = sprintf("Query Failed: %s", mysql_error());
            echo $error;
        }
        else if (mysqli_num_rows($result_inst_instance) > 0) {
            $program = $dates; $startTime = $dates; $endTime = $dates; $total = $dates;
            while ($row_inst_instance = mysqli_fetch_array($result_inst_instance)){
                $date = $row_inst_instance['date']; 

                if (($key = array_search($date, $program)) !== false){
                    $program_ID = $row_inst_instance['program ID'];
                    $query = sprintf(
                        "SELECT * FROM `programs` WHERE ID = '%s'",
                        mysqli_real_escape_string($conn, $program_ID)
                    );
                    $result_programs = mysqli_query($conn, $query);
                    if (!$result_programs) {
                        $error = sprintf("Query Failed: %s", mysql_error());
                        echo $error;
                    }
                    else if (mysqli_num_rows($result_programs) > 0) {
                        $row_programs = mysqli_fetch_array($result_programs);
                        
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

            return $_INFO;
        }
    }
?>