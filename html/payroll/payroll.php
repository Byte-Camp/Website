<html lang="en">
<?php   
    include('connect/user.php');
    include('utils/payPeriod.php');
    include('utils/instructorInfo.php');
    

    $_USER = get_user();
    if (!isset($_USER['email'])) { echo '<script>location.href = "index.php"</script>'; }


    $_PERIOD = get_period();
    $currMonth = $_PERIOD['months'][((int)date("m"))-1];
    $currDate = ((int)date("d"))-1;
    //$_PERIOD['dates'] = ['2009-08-03 00:00:00', '2009-08-04 00:00:00', '2009-08-05 00:00:00', '2009-08-06 00:00:00', '2009-08-07 00:00:00', '2009-08-10 00:00:00', '2009-08-11 00:00:00', '2009-08-12 00:00:00', '2009-08-13 00:00:00', '2009-08-14 00:00:00'];


    $_INFO = get_info($_USER['id'], $_PERIOD['dates']);
?>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Staff Payroll - Byte Camp - Creative Tech Programs for Kids: 3D Animation, Claymation, 2D Game Design, 3D Game Design, Music and Video Production, 3D Printing and Design, 2D Tablet Animation, Build an App</title>

    <!-- Bootstrap Core CSS -->
    <link href="../../static/css/vendor/bootstrap.min.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Caveat+Brush|Montserrat:400,700" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="../../static/css/main.css" rel="stylesheet">
    <link href="../../static/css/vendor/animate.css" rel="stylesheet">
    <link href="../../static/css/vendor/aos.css" rel="stylesheet">
    <script src="../../static/js/vendor/aos.js"></script>
    <!-- Theme CSS -->
    <link href="../../static/css/main.css" rel="stylesheet">
</head>



<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <script>AOS.init();</script>

    <!-- NAVIGATION -->
    <nav id="camps-nav" class="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation" style="box-shadow: 0px 2px 5px black;" data-aos="slide-down" data-aos-duration="1000" data-aos-once="true">
        <div class="container-fluid">
            <div class="navbar-header">
                <a href="../../index.html" ><img src="../../static/img/buttons/btn_home.png" style="display: inline-block; height: 40px; margin-top: 5px; float: left;"/></a>
                <a class="navbar-brand page-scroll" style="margin-left: -5px;" href="../../index.html">
                    <span class="light">Byte Camp</span>
                </a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    Menu <i class="fa fa-bars"></i>
                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a class="page-scroll" href="connect/logout.php">Logout</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Programs <span class="caret"></span></a>
                        <ul class="dropdown-menu navbar-custom">
                            <li><a href="../calendar/calendar_2017.html">Calendar</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../byte-o-vision.html">Best Ofs</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../resources.html">Public Resources</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../camps.html#programs">Staff Resources</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us <span class="caret"></span></a>
                        <ul class="dropdown-menu navbar-custom">
                            <li><a href="../about_us.html#what">Who are We?</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../about_us.html#who">Contact Us</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../faq.html">FAQs</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

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
                    if ($_INFO['program'][$i] == '<h4 class="square-info loc-name"> <br><br>NO WORK TODAY </h4>') { $enable = ''; }
                    echo '
                    <div id="'.$i.'" class="square container col-md-2" data-toggle="'.$enable.'" data-target="#edit_square">
                        <div class="day hidden-md hidden-lg hidden-xl text-center"><p>'.$_PERIOD['weekdays'][$i+1].'</p></div>
                        <label id="day'.$i.'"> '.$_PERIOD['days'][$i].' </label>
                        '.$_INFO['program'][$i].'
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
                    if ($_INFO['program'][$i] == '<h4 class="square-info loc-name"> <br><br>NO WORK TODAY </h4>') { $enable = ''; }
                    echo '
                    <div id="'.$i.'" class="square container col-md-2" data-toggle="'.$enable.'" data-target="#edit_square">
                        <div class="day hidden-md hidden-lg hidden-xl text-center"><p>'.$_PERIOD['weekdays'][$i-4].'</p></div>
                        <label id="day'.$i.'"> '.$_PERIOD['days'][$i].' </label>
                        '.$_INFO['program'][$i].'
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

    <!-- Footer -->
    <footer id='payroll-foot'>
        <!--div class="container text-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true"-->
        <div class="container text-center">
            <img src="../../static/img/icons/other/website-logo.png" style="width:20%"/>
            <p>Copyright &copy; Byte Camp 2017</p>
        </div>
    </footer>

    <!-- Google Maps API -->
    <!--script src='https://maps.googleapis.com/maps/api/js?'></script-->
    <!-- jQuery -->
    <script src="../../static/js/vendor/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="../../static/js/vendor/bootstrap.min.js"></script>
    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <!-- Theme JavaScript -->
    <script src="../../static/js/main.js"></script>
    <script src="../../static/js/payroll.js"></script>
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
