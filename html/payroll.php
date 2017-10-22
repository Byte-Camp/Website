<html lang="en">
<?php
    include('../db_utils/connect.php');
    include('../connect/user.php');
    include('../static/php/payroll_utils.php');
     
    $_USER = get_user();
    $_PERIOD = get_period();
    $_SCHEDULE = get_schedule($_USER['id'], $_PERIOD['dates']);
    
    $currMonth = $_PERIOD['months'][((int)date("m"))-1];
    $currDate = ((int)date("d"))-1;
    //$_PERIOD['dates'] = ['2009-08-03 00:00:00', '2009-08-04 00:00:00', '2009-08-05 00:00:00', '2009-08-06 00:00:00', '2009-08-07 00:00:00', '2009-08-10 00:00:00', '2009-08-11 00:00:00', '2009-08-12 00:00:00', '2009-08-13 00:00:00', '2009-08-14 00:00:00'];
    //echo "<script>console.log('period');</script>";
    
    
?>
<head>
    <title>Staff Payroll - Byte Camp - Creative Tech Programs for Kids: 3D Animation, Claymation, 2D Game Design, 3D Game Design, Music and Video Production, 3D Printing and Design, 2D Tablet Animation, Build an App</title>

    <script src="../static/js/init.js"></script>
    <script>printHead("../");</script>
</head>



<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <script>AOS.init();</script>

    <script>printNav("../");</script>

    <!-- BANNER -->
    <div id="header">
        <div class="container-fluid banner" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
            <div class="col-lg-12">
                <h1 class="text-center banner-text" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">Staff Payroll</h1>
            </div>
        </div>
    </div>

    <!-- CALENDAR -->
    <a id="payroll" class="anchor"></a>
    <div id="payroll-section" class="container content-section accent-section" style="padding:0px; padding-top:50px; padding-bottom:50px; margin-bottom:100px;">
        <h3 id="instructor" class="text-center" style="margin:10px;">Instructor: <?php echo $_USER['firstname'].'&nbsp'.$_USER['lastname'] ?></h3>
        <h3 id="pay-period" class="text-center">Pay Period: <?php echo $_PERIOD['payPeriod'] ?> </h3>

        <div class="container text-center hidden-xs hidden-sm">
            <div class="container col-xs-1"></div>
            <div class="day container col-xs-2"><p><?php echo $_PERIOD['weekdays'][1]; ?></p></div>
            <div class="day container col-xs-2"><p><?php echo $_PERIOD['weekdays'][2]; ?></p></div>
            <div class="day container col-xs-2"><p><?php echo $_PERIOD['weekdays'][3]; ?></p></div>
            <div class="day container col-xs-2"><p><?php echo $_PERIOD['weekdays'][4]; ?></p></div>
            <div class="day container col-xs-2"><p><?php echo $_PERIOD['weekdays'][5]; ?></p></div>
            <div class="container col-xs-1"></div>
        </div>
        <div class="container">
            <div class="container col-xs-1"></div>
            <?php 
                for ($i=0;$i<5;$i++){
                    $enable = 'modal';
                    if ($_SCHEDULE['program'][$i] == '<h4 class="square-info loc-name"> <br><br>NO WORK TODAY </h4>') { $enable = ''; }
                    echo '
                    <div id="'.$i.'" class="square container col-md-2" data-toggle="'.$enable.'" data-target="#edit_square">
                        <div class="day hidden-md hidden-lg hidden-xl text-center"><p>'.$_PERIOD['weekdays'][$i+1].'</p></div>
                        <label id="day'.$i.'"> '.$_PERIOD['days'][$i].' </label>
                        '.$_SCHEDULE['program'][$i].'
                        <h6 class="square-info"> '.$_PERIOD['startTime'][$i].' </h6>
                        <h6 class="square-info"> '.$_PERIOD['endTime'][$i].' </h6>
                        <h5 class="square-info"> '.$_PERIOD['total'][$i].' </h5>
                    </div><br class="hidden-md hidden-lg hidden-xl">
                    '; 
                }
            ?>    
            <div class="container col-xs-1"></div>
        </div>
        <div class="container">
            <div class="container col-xs-1"></div>
            <?php 
                for ($i=5;$i<10;$i++){
                    $enable = 'modal';
                    if ($_SCHEDULE['program'][$i] == '<h4 class="square-info loc-name"> <br><br>NO WORK TODAY </h4>') { $enable = ''; }
                    echo '
                    <div id="'.$i.'" class="square container col-md-2" data-toggle="'.$enable.'" data-target="#edit_square">
                        <div class="day hidden-md hidden-lg hidden-xl text-center"><p>'.$_PERIOD['weekdays'][$i-4].'</p></div>
                        <label id="day'.$i.'"> '.$_PERIOD['days'][$i].' </label>
                        '.$_SCHEDULE['program'][$i].'
                        <h6 class="square-info"> '.$_PERIOD['startTime'][$i].' </h6>
                        <h6 class="square-info"> '.$_PERIOD['endTime'][$i].' </h6>
                        <h5 class="square-info"> '.$_PERIOD['total'][$i].' </h5>
                    </div><br class="hidden-md hidden-lg hidden-xl">
                    '; 
                }
            ?>    
            <div class="container col-xs-1"></div>
        </div>
	</div>

    <!-- EDIT MODAL -->
    <div class="modal fade" id="edit_square" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 id='modal-title' class="modal-title">Edit Hours for: </h4>
                </div>
                <div class="modal-body col-xs-10 col-centered">
                    <form>
                        <!--div class="form-group">
                            <label for="location">Location</label>
                            <select class="form-control" id="location"-->
                            <!--?php 
                                foreach ($locations as &$loc) {
                                    echo '<option value="'.$loc.'">'.$loc.'</option>';
                                }
                            ?-->
                            <!--/select>
                        </div-->

                        <div class="form-group col-xs-6">
                            <!-- START TIME -->
                            <label for="start">Add to Start Time</label>
                            <div class="input-group" style="width:75%">
                                <input id="start" type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small class="form-text text-muted">If you started earlier than 30 min before camp start-time please explain why in the comments section.</small>
                            <br>
                            <!-- END TIME -->
                            <label for="drive">Add to End Time</label>
                            <div class="input-group" style="width:75%">
                                <input id="drive" type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small class="form-text text-muted">If you ended later than 30 minutes after camp end-time please explain why in the comments section.</small>
                            <br>
                            <!-- DRIVE TIME -->
                            <label for="drive">Drive Time</label>
                            <div class="input-group" style="width:75%">
                                <input id="drive" type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small class="form-text text-muted">Specify your TOTAL driving time</small>
                            <br>
                            
                            <div class="input-group" style="width:75%">
                                <label for="mgr-ok">Manager OK</label>
                                <br>
                                <span id="mgr-ok" class="glyphicon glyphicon-ok btn-success"></span> 
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleTextarea">Comments</label>
                            <textarea class="form-control" id="exampleTextarea" rows="15" style="width:45%" placeholder="Example:
                                            Added 0.5 HRS to END TIME because camper stayed late"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Submit Change</button>
                </div>
            </div>
        </div>
    </div>

    <script>printFoot("../");</script>
    <script src="../static/js/payroll.js"></script>
    <script>
        $('.square').on('click', function(){
            <?php echo "
            var curr_month = ('".$currMonth."');
            var curr_date = ('".$currDate."');
            "; ?>;

            var clicked_date = document.getElementById('day'+this.id).innerHTML;
            if (parseInt(clicked_date) > parseInt(curr_date)+14) {
                <?php echo "curr_month = ('".$_PERIOD['months'][((int)date("m"))-2]."');"; ?>;
            }
            else if (parseInt(clicked_date) < parseInt(curr_date-14)) {
                <?php echo "curr_month = ('".$_PERIOD['months'][((int)date("m"))]."');"; ?>;
            }
            document.getElementById('modal-title').innerHTML = 'Edit Hours for: '+curr_month+' '+clicked_date;
        });        
    </script>
</body>
    
</html>
