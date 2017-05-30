<?php
    function get_period() {
        $months = array('January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        $weekday = array('Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        
        $start_of_year = date("m/d/Y", strtotime("Monday", mktime(0, 0, 0, 1, 1)));
        $today = date("m/d/Y"); $i = 2;
        $startDate = $start_of_year;
        $weekDates = array();

        $tD = date_parse_from_format("m/d/Y", $today);
        do {        
            $startDate = date("m/d/Y", strtotime("+2 weeks", strtotime($startDate)));
            $sD = date_parse_from_format("m/d/Y", $startDate);
            array_push($weekDates,$sD);
        } 
        while((int)$sD['month'] < (int)$tD['month'] || ((int)$sD['month'] == (int)$tD['month']) && (int)$sD['day'] < (int)$tD['day']);
        
        $start = $weekDates[sizeof($weekDates)-2];
        $end = $weekDates[sizeof($weekDates)-1];
        $startMonth = $start['month'];
        $endMonth = $end['month'];
        $startDay = $start['day'];
        $endDay = $end['day'];
      
        $payPeriod = $months[$startMonth-1].' '.$startDay.' to '.$months[$endMonth-1].' '.$endDay;

        $days = array();
        $nextDay = $startDate;
        for ($i=0; $i<14; $i++){
            $nextDay = date("m/d/Y", strtotime("-1 day", strtotime($nextDay)));
            $weekday = date("l",strtotime($nextDay));
            if (strcmp($weekday, 'Saturday') != 0 && strcmp($weekday, 'Sunday') != 0) {
                $nD = date_parse_from_format("/m/d/Y", $nextDay);
                array_push($days,$nD['day']);
            }  
        }
        $days = array_reverse($days);

        return [$payPeriod, $days, $months, $startDay];
    }   
?>