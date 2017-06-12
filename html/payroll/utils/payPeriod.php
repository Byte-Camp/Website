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
?>