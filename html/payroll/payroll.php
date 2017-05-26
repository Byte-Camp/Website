<?php
    include('db_utils/connect.php');

    $conn = db_connect();
    #$user = getSessionUser();
    $email = 'adarguy10@gmail.com';
    $id = sprintf(
        "SELECT ID FROM `instructors` WHERE email = '%s'",
        mysqli_real_escape_string($conn, $email)
    );
    echo "<script>alert(".$id.");</script>"
?>
<html lang="en">

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

<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top" onload="init()">

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
                        <a class="page-scroll" href="">Logout</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Programs <span class="caret"></span></a>
                        <ul class="dropdown-menu navbar-custom">
                            <li><a href="../calendar/calendar_2017.html">Calendar</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../camps.html#programs">Camp Descriptions</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="../byte-o-vision.html">Best Of's</a></li>
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
        <div class="container-fluid banner" style="height:340px; margin-top:-40px; background: url() no-repeat bottom center scroll;">
        </div>
    </div>


    <!-- CALENDAR -->
    <a id="payroll" class="anchor"></a>
    <div id="payroll-section" class="container content-section accent-section" style="padding:0px; padding-top:50px; padding-bottom:50px; margin-bottom:100px;">
        <h3 class="text-center" style="margin:10px;">Instructor: Adar Guy</h3>
        <h3 class="text-center">Pay Period: July 1st - July 12th</h3>

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
            <div class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label>1</label>
            </div>
            <div class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label>1</label>
            </div>
            <div class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label>1</label>
            </div>
            <div class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label>1</label>
            </div>
            <div class="square container col-xs-2" data-toggle="modal" data-target="#edit_square">
                <label>1</label>
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
                    <h4 class="modal-title">Edit Hours for: June 1st</h4>
                </div>
                <div class="modal-body col-xs-10 col-centered">
                    <form>
                        <div class="form-group">
                            <label for="exampleSelect1">Location</label>
                            <select class="form-control" id="exampleSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option selected>Windsor Pavilion</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div class="form-group col-xs-6">
                            <!-- START TIME -->
                            <label for="exampleInputEmail1">Start Time</label>
                            <div class="input-group" style="width:75%">
                                
                                <input type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <!-- END TIME -->
                            <label for="exampleInputEmail1">End Time</label>
                            <div class="input-group" style="width:75%">
                                
                                <input type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <!-- DRIVE TIME -->
                            <label for="exampleInputEmail1">Drive Time</label>
                            <div class="input-group" style="width:75%">
                                
                                <input type="text" class="form-control" value="0">
                                <span class="input-group-btn">
                                    <button class="btn btn-minus" type="button">-</button>
                                    <button class="btn btn-plus" type="button">+</button>
                                </span>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div class="form-group">
                            <label for="exampleTextarea">Comments</label>
                            <textarea class="form-control" id="exampleTextarea" rows="10" style="width:45%" placeholder="Example:
                                            Added 0.5 HRS to END TIME because camper stayed late"></textarea>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Make Change</button>
                </div>
            </div>
        </div>
    </div>
    
    <style>
        .day{
            background-color:#3B839E;
            height:50px; 
        }
        .square{
            margin:0px;
            padding:0px;
            background-color:#fff;
            border:2px solid black;
            min-height:150px;
        }
        .square:hover{
            background-color:#ddd;
            color:#000;
        }
    </style>
        <!-- Footer -->
    <footer id='payroll-foot'>
        <!--div class="container text-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true"-->
        <div class="container text-center">
            <img src="../../static/img/icons/other/website-logo.png" style="width:20%"/>
            <p>Copyright &copy; Byte Camp 2017</p>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="../../static/js/vendor/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="../../static/js/vendor/bootstrap.min.js"></script>
    <script>
        $('.btn-minus').on('click', function(){
            if(parseFloat($(this).parent().siblings('input').val()) > 0){
                $(this).parent().siblings('input').val(parseFloat($(this).parent().siblings('input').val()) - 0.25)  
            }
            
        })

        $('.btn-plus').on('click', function(){
            $(this).parent().siblings('input').val(parseFloat($(this).parent().siblings('input').val()) + 0.25)
        })
    
    </script>
    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <!-- Theme JavaScript -->
    <script src="../../static/js/main.js"></script>

    <script src="../../static/js/vendor/box2d.min.js" charset="utf-8"></script>
    <script src="../../static/js/resources.js" charset="utf-8"></script>
    <script src="../../static/js/vendor/MouseAndTouch.js" charset="utf-8"></script>
    <script src="../../static/js/vendor/DebugMouseDrag.js" charset="utf-8"></script>
    <script src="../../static/js/falling-content.js" charset="utf-8"></script>
</body>

</html>
