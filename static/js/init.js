function checkMobile(){
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){ document.getElementById('title-grab').innerHTML = ''; return true; }
}

function printNav(root_dir, link_dir='') {
	document.write(`    
	    <!-- Navigation -->
	    <nav id="navbar" class="navbar navbar-custom navbar-fixed-top top-nav-collapse" role="navigation" data-aos="slide-down" data-aos-duration="1000" data-aos-once="true">
	        <div class="container-fluid">
	            <div class="navbar-header navbar-home">
	                <a class="navbar-icon" href="`+root_dir+`index.html" ><img src="`+root_dir+`static/img/buttons/btn_home.png"/></a>
	                <a class="navbar-brand page-scroll" style="margin-left: -5px;" href="`+root_dir+`index.html">
	                    <span class="navbar-name">Byte Camp</span>
	                </a>
	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
	                    Menu <i class="fa fa-bars"></i>
	                </button>
	            </div>
	            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
	                <ul class="nav navbar-nav">
	                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
	                    <li class="hidden">
	                        <a href="#page-top"></a>
	                    </li>
	                    <li>
	                        <a class="page-scroll navbar-reg" href="`+link_dir+`calendar/calendar_2017.html"> Register Now </a>
	                    </li>
	                    <li class="dropdown navbar-programs">
	                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Programs <span class="caret"></span></a>
	                        <ul class="dropdown-menu navbar-custom">
	                            <li><a href="`+link_dir+`calendar/calendar_2017.html">Calendar</a></li>
	                            <li role="separator" class="divider"></li>
	                            <li><a href="`+link_dir+`camps.html#programs">Camps</a></li>
	                            <li role="separator" class="divider"></li>
	                            <li><a href="`+link_dir+`byte-o-vision.html">Best Of's</a></li>
	                            <li role="separator" class="divider"></li>
	                            <li><a href="`+link_dir+`resources.html">Resources</a></li>
	                        </ul>
	                    </li>
	                    <li class="dropdown navbar-about">
	                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> About Us <span class="caret"></span></a>
	                        <ul class="dropdown-menu navbar-custom">
	                            <li><a href="`+link_dir+`about_us.html#what">Who are We?</a></li>
	                            <li role="separator" class="divider"></li>
	                            <li><a href="`+link_dir+`about_us.html#who">Contact Us</a></li>
	                            <li role="separator" class="divider"></li>
	                            <li><a href="`+link_dir+`faq.html">FAQs</a></li>
	                        </ul>
	                    </li>
	                </ul>
	            </div>
	            <!-- /.navbar-collapse -->
	        </div>
	        <!-- /.container -->
	    </nav>
	`);
}

function printHead(root_dir){
	document.write(`
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <meta name="description" content="">
	    <meta name="author" content="">

		<link rel="shortcut icon" href="`+root_dir+`favicon.ico" type="image/x-icon">

	    <!-- Bootstrap Core CSS -->
	    <link href="`+root_dir+`static/css/vendor/bootstrap.min.css" rel="stylesheet">

	    <!-- Custom Fonts -->
	    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	    <link href="https://fonts.googleapis.com/css?family=Caveat+Brush|Montserrat:400,700" rel="stylesheet">

	    <!-- AOS Core -->
	    <link href="`+root_dir+`static/css/vendor/animate.css" rel="stylesheet">
	    <link href="`+root_dir+`static/css/vendor/aos.css" rel="stylesheet">
	    <script src="`+root_dir+`static/js/vendor/aos.js"></script>

	    <!-- Theme -->
	    <link href="`+root_dir+`static/css/main.css" rel="stylesheet">
    `);
}

function printFoot(root_dir){
	document.write(`
		<!-- Footer -->
	    <footer class="container-fluid">
	        <div class="col-center">
	            <div class="container text-center" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
	                <img src="`+root_dir+`static/img/icons/other/website-logo.png"/>
	                <p>Copyright &copy; Byte Camp 2017</p>
	            </div>
	        </div>
	    </footer>

	    <!-- jQuery -->
	    <script src="`+root_dir+`static/js/vendor/jquery.min.js"></script>
	    
	    <!-- Bootstrap Core JS -->
	    <script src="`+root_dir+`static/js/vendor/bootstrap.min.js"></script>

	    <!-- Plugin JS -->
	    <script src="`+root_dir+`static/js/vendor/jquery.easing.min.js"></script>

	    <script src="`+root_dir+`static/js/vendor/box2d.min.js" charset="utf-8"></script>
	    <script src="`+root_dir+`static/js/vendor/MouseAndTouch.js" charset="utf-8"></script>
	    <script src="`+root_dir+`static/js/vendor/DebugMouseDrag.js" charset="utf-8"></script>
	    <script src="`+root_dir+`static/js/falling-content.js" charset="utf-8"></script>
	    <script src="`+root_dir+`static/js/vendor/isotope.pkgd.min.js" charset="utf-8"></script>

	    <!-- Theme JS-->
	    <script src="`+root_dir+`static/js/main.js"></script>

    `);
}

