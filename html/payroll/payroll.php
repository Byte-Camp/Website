<html lang="en">
<?php
    
    include('db_utils/connect.php');
    include('connect/user.php');
    include('utils/payPeriod.php');
    
    $email = get_user();
    if (!isset($email)){
        echo '<script>location.href = "index.php"</script>';
    }
    $arr = get_period();
    $payPeriod = $arr[0];
    $days = $arr[1];
    $months = $arr[2];
    $startDay = $arr[3];

    $conn = db_connect();
    
    //$email = 'claire.coupland@gmail.com';
    $query = sprintf(
        "SELECT * FROM instructors WHERE email = '%s'",
        mysqli_real_escape_string($conn, $email)
    );
    $result_instructor = mysqli_query($conn, $query);
    if (!$result_instructor) {
        $error = sprintf("Query Failed: %s", mysql_error());
        echo $error;
    }
    else if (mysqli_num_rows($result_instructor) > 0) {
        $row_instructor = mysqli_fetch_array($result_instructor);
        $firstname = $row_instructor["first name"];
        $lastname = $row_instructor["last name"];
        $instructor_id = $row_instructor["ID"];
        $city = $row_instructor["city"];

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

            $query = sprintf(
                "SELECT * FROM `schools` WHERE `District Number` = '%s'",
                mysqli_real_escape_string($conn, 61)
            );
            $result_region = mysqli_query($conn, $query);
            if (!$result_region) {
                $error = sprintf("Query Failed: %s", mysql_error());
                echo $error;
            }
            else if (mysqli_num_rows($result_region) > 0) {
                //echo'   <script>';
                $locations = Array();
                while ($row_region = mysqli_fetch_array($result_region)){
                    array_push($locations, $row_region['School Name']);
                    /*echo'
                            document.getElementById("location").innerHTML += "<option>'.$row_region['School Name'].'</option>";
                            console.log("'.$row_region['School Name'].'");
                        ';
                    */
                }
                //echo'   </script>';
            }
        }

        $query = sprintf(
            "SELECT * FROM `instructor instance` WHERE instructor_ID = '%s'",
            mysqli_real_escape_string($conn, $instructor_id)
        );
        $result_inst_instance = mysqli_query($conn, $query);
        if (!$result_inst_instance) {
            $error = sprintf("Query Failed: %s", mysql_error());
            echo $error;
        }
        else if (mysqli_num_rows($result_inst_instance) > 0) {
            $temp = 0;
            while ($row_inst_instance = mysqli_fetch_array($result_inst_instance)){
                if($temp == 5){
                    break;
                }
                $temp += 1;
                
                $program_ID = $row_inst_instance['program_ID'];
                $query = sprintf(
                    "SELECT * FROM programs WHERE ID = '%s'",
                    mysqli_real_escape_string($conn, $temp+1) //should be $program_ID
                );
                
                $result_programs = mysqli_query($conn, $query);
                if (!$result_programs) {
                    $error = sprintf("Query Failed: %s", mysql_error());
                    echo $error;
                }
                
                else if (mysqli_num_rows($result_programs) > 0) {
                    $row_programs = mysqli_fetch_array($result_programs);
                    $camp = $row_programs['program'];
                    if (!$camp){
                        $camp = $row_programs['program format'];
                    }   
                }    
            }
        }
    }
    $query = sprintf(
        "SELECT * FROM `program dates` WHERE ID = 2391"
    );
    
    $result = mysqli_query($conn, $query);

    if (!$result) {
        $error = sprintf("Query Failed: %s", mysql_error());
        echo $error;
    }
    
    else if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result);
        //echo '  <script>
        //            alert("'.$row['ID'].'");
        //        </script>';
    }
    mysqli_close($conn);
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
                            <li><a href="../camps.html#programs">Camp Descriptions</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../byte-o-vision.html">Best Ofs</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../resources.html">Resources</a></li>
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
        <h3 id="instructor" class="text-center" style="margin:10px;">Instructor: <?php echo $firstname.'&nbsp'.$lastname ?></h3>
        <h3 id="pay-period" class="text-center">Pay Period: <?php echo $payPeriod ?> </h3>

        <div class="container text-center">
            <div class="container col-xs-1"></div>
            <div class="day container col-xs-2"><p>Monday</p></div>
            <div class="day container col-xs-2"><p>Tuesday</p></div>
            <div class="day container col-xs-2"><p>Wednesday</p></div>
            <div class="day container col-xs-2"><p>Thursday</p></div>
            <div class="day container col-xs-2"><p>Friday</p></div>
            <div class="container col-xs-1"></div>
        </div>
        <div class="container">
            <div class="container col-xs-1"></div>
            <div id="1" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day1"> <?php echo $days[0] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[0] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="2" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day2"> <?php echo $days[1] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[0] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="3" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day3"> <?php echo $days[2] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[0] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="4" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day4"> <?php echo $days[3] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[0] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="5" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day5"> <?php echo $days[4] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[0] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div class="container col-xs-1"></div>
        </div>
        <div class="container">
            <div class="container col-xs-1"></div>
            <div id="6" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day6"> <?php echo $days[5] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[1] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="7" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day7"> <?php echo $days[6] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[1] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="8" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day8"> <?php echo $days[7] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[1] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="9" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day9"> <?php echo $days[8] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[1] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
            <div id="10" class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label id="day10"> <?php echo $days[9] ?> </label>
                <h4 class="square-info loc-name hidden-xs hidden-sm"><?php echo $locations[1] ?></h4>
                <h6 class="square-info">Start Time:<br> 8:30 am</h6>
                <h6 class="square-info">End Time:<br> 3:30 pm</h6>
                <h5 class="square-info">Total:<br> 7 Hours</h5>
            </div>
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
                        <div class="form-group">
                            <label for="location">Location</label>
                            <select class="form-control" id="location">
                            <?php 
                                foreach ($locations as &$loc) {
                                    echo '<option value="'.$loc.'">'.$loc.'</option>';
                                }
                            ?>
                            </select>
                        </div>

                        <div class="form-group col-xs-6">
                            <!-- START TIME -->
                            <label for="start">Start Time</label>
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
                            <label for="drive">End Time</label>
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
                            <small class="form-text text-muted">If you you edit this please explain why in the comments section.</small>
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
            var curr_month = ('".$months[((int)date("m"))-1]."');
            var start_date = ('".$startDay."');
            "; ?>;

            var clicked_date = document.getElementById('day'+this.id).innerHTML;
            if (parseInt(clicked_date) < parseInt(start_date)){
                <?php echo "curr_month = ('".$months[((int)date("m"))]."');"; ?>;
            }
            document.getElementById('modal-title').innerHTML = 'Edit Hours for: '+curr_month+' '+clicked_date;
        });        
    </script>
</body>
    
</html>
