// The code was modified by iTechnologie Ltd. and is based on apple sample code used to detect plugins in browsers.
// The code is provided as is. You can redistribute this code but when you change the code, you are not permited to redistribute it as the iTechnologie Code 


var detectableWithVB = false;
var pluginFound = false;

                                                                                                                                      
function canDetectPlugins() {
    if( detectableWithVB || (navigator.plugins && navigator.plugins.length > 0) ) {
	return true;
    } else {
	return false;
    }
}

function detectBurster() {
  pluginFound = detectPlugin('urster');
  if (!pluginFound) {
    if(!pluginFound && detectableWithVB) {
	pluginFound = detectActiveXControl('Burster.PluginHostCtrl.1');
    }
  }
  return pluginFound;
}



function detectPlugin() {
    // allow for multiple checks in a single pass
    var daPlugins = detectPlugin.arguments;
    // consider pluginFound to be false until proven true
    var pluginFound = false;
    // if plugins array is there and not fake
  
    if (navigator.plugins && navigator.plugins.length > 0) {
	var pluginsArrayLength = navigator.plugins.length;
	// for each plugin...
	for (pluginsArrayCounter=0; pluginsArrayCounter < pluginsArrayLength; pluginsArrayCounter++ ) {
	    // loop through all desired names and check each against the current plugin name
	    var numFound = 0;
	    for(namesCounter=0; namesCounter < daPlugins.length; namesCounter++) {
		// if desired plugin name is found in either plugin name or description
		
		if( (navigator.plugins[pluginsArrayCounter].name.indexOf(daPlugins[namesCounter]) >= 0) || 
		    (navigator.plugins[pluginsArrayCounter].description.indexOf(daPlugins[namesCounter]) >= 0) ) {
		    // this name was found
		    numFound++;
		}   
	    }
	    // now that we have checked all the required names against this one plugin,
	    // if the number we found matches the total number provided then we were successful
	    
	    if(numFound == daPlugins.length) {
		pluginFound = true;
		// if we've found the plugin, we can stop looking through at the rest of the plugins
		break;
	    }
	}
    }
    return pluginFound;
} // detectPlugin

function check_for_burster(bc_result, bc_action, bc_playarena) {
    if (canDetectPlugins()) {
        jQuery('#'+bc_result).css("display","none");
        found = 0;
        if(!detectBurster()) {
			jQuery('#'+bc_result).addClass("bc_step_1_failed");
			jQuery('#'+bc_action).attr('href', 'http://geta3d.com/index.php?option=com_content&view=article&id=38&Itemid=18');
			jQuery('#'+bc_result).css("display","block");
			jQuery('#'+bc_result).html('');
	
			jQuery('#'+bc_playarena).html("");
		} else {
			jQuery('#'+bc_result).css("display","none");
			jQuery('#'+bc_result).css("width","0px");
			jQuery('#'+bc_result).css("height","0px");	    
    	}
	}
}


// Here we write out the VBScript block for MSIE Windows
if ((navigator.userAgent.indexOf('MSIE') != -1) && (navigator.userAgent.indexOf('Win') != -1)) {
    document.writeln('<script language="VBscript">');

    document.writeln('\'do a one-time test for a version of VBScript that can handle this code');
    document.writeln('detectableWithVB = False');
    document.writeln('If ScriptEngineMajorVersion >= 2 then');
    document.writeln('  detectableWithVB = True');
    document.writeln('End If');

    document.writeln('\'this next function will detect most plugins');
    document.writeln('Function detectActiveXControl(activeXControlName)');
    document.writeln('  on error resume next');
    document.writeln('  detectActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('     detectActiveXControl = IsObject(CreateObject(activeXControlName))');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('\'and the following function handles QuickTime');
    document.writeln('Function detectQuickTimeActiveXControl()');
    document.writeln('  on error resume next');
    document.writeln('  detectQuickTimeActiveXControl = False');
    document.writeln('  If detectableWithVB Then');
    document.writeln('    detectQuickTimeActiveXControl = False');
    document.writeln('    hasQuickTimeChecker = false');
    document.writeln('    Set hasQuickTimeChecker = CreateObject("QuickTimeCheckObject.QuickTimeCheck.1")');
    document.writeln('    If IsObject(hasQuickTimeChecker) Then');
    document.writeln('      If hasQuickTimeChecker.IsQuickTimeAvailable(0) Then ');
    document.writeln('        detectQuickTimeActiveXControl = True');
    document.writeln('      End If');
    document.writeln('    End If');
    document.writeln('  End If');
    document.writeln('End Function');

    document.writeln('</scr' + 'ipt>');
}
