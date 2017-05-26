<?php
	function getSessionUser() {

        //checks to see if the session is started before starting it.
	    if(!isset($_SESSION)) 
        { 
        session_start(); 
        } 
        
	    if (isset($_SESSION['login_user'])) {
	        return $_SESSION['login_user'];
	    }

	    return NULL;
	}

?>
