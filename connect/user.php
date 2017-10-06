<?php
	function get_user() {
		if(!isset($_SESSION)) { 
        	@session_start(); 
        } 
        
	    if (isset($_SESSION['email'])) { 
	    	return $_SESSION;
	    }
		header('Location: ../index.php');
	    return NULL;
	}
?>
