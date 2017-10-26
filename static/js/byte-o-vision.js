var pid = 0;
var prog = "";
var loc = "";
var web = "";
var ua = navigator.userAgent.toLowerCase(); 
var flashvars = {};
var attributes = {};
var params = { wmode: "transparent" };
var list = "projects";

$(document).ready(function(){
    $("#games_button").click();
});

function init(){
    if (ua.indexOf('firefox') == -1) { 
        alert("Recent versions of Safari and Chrome do not support our Byte-o-Vision viewer.  Please view in Firefox if you are experiencing problems."); // Safari
    }
}

function gotoMyURL() {
    window.history.back();
    //window.location.href = '../index.html'+web;
}

function flash_java(){
   document.getElementById("left").innerHTML ="<br><br><center>We recommend using a recent version of <a href=\"https://www.mozilla.org/en-US/firefox/new/\">Firefox</a> to view these projects.</center>";
}

function show_blend(path) {
    // burster plugin no longer supported... other ideas??
}

function show_video(path) {
    document.getElementById("mp4Player").innerHTML = "<video width='530' autoplay controls><source src=\""+path+"\" type ='video/mp4'>Your browser does not support the video tag</video>"
}   

function show_scratch(path) {   
    //ReadFile(path);
    document.getElementById("sb2Player").style.display = "block";
    //execGreenFlag();  

}   

function show_html(path) {  
    document.getElementById("htmlPlayer").style.display = "block";
    document.getElementById("htmlPlayer").innerHTML = "<iframe width='530' src=\""+path+"\"/ height='100%'  sandbox='allow-same-origin allow-scripts allow-forms'>"
}       

function hide(){
    document.getElementById("mp4Player").innerHTML = "";
    document.getElementById("blender").innerHTML = "";
    document.getElementById("htmlPlayer").style.display = "none";
    if(document.getElementById("sb2Player").style.display == "block") {
        stopAll(); //stop sb2 file;
    } 
    document.getElementById("sb2Player").style.display = "none";
}

function newSWF(path,udown){
    flash_java();
    str = path.toLowerCase();
    hide();
    document.getElementById("left").style.display = "none";
    if(str.substring(str.length-3) == "swf") {
        swfobject.embedSWF("../static/best-ofs/"+list+"/"+path, "left", "540", "400", "7.0.0");
    } else if(str.substring(str.length-5) == "blend") {
        show_blend("../static/best-ofs/"+list+"/"+path);
    } else if (str.substring(str.length-3) == "sb2") {
        show_scratch("../static/best-ofs/"+list+"/"+path);
    } else if (str.substring(str.length-4) == "html") {
        show_html("../static/best-ofs/"+list+"/"+path);
    } else  {
        show_video("../static/best-ofs/"+list+"/"+path);    
    }
    
    myImage = new Image()
} 


function menuList(div_input) {

    document.getElementById("clay").style.display = "none"
    document.getElementById("2Dtablet").style.display = "none";
    document.getElementById("musicvid").style.display = "none";
    document.getElementById("coding").style.display = "none";
    document.getElementById("games").style.display = "none";
    document.getElementById("3D").style.display = "none";
    document.getElementById("3Dgame").style.display = "none";
    document.getElementById("projects").style.display = "none";

    document.getElementById(div_input).style.display = "inline";

    document.getElementById("clay_button").src = "../static/best-ofs/res/claybutton.png";
    document.getElementById("2Dtablet_button").src = "../static/best-ofs/res/2Dtabletbutton.png";
    document.getElementById("musicvid_button").src = "../static/best-ofs/res/musicvidbutton.png";               
    document.getElementById("games_button").src = "../static/best-ofs/res/gamesbutton.png";             
    document.getElementById("3D_button").src = "../static/best-ofs/res/3Dbutton.png";
    //document.getElementById("3Dgame_button").src = "../static/best-ofs/res/3Dgamebutton.png";               
    document.getElementById("projects_button").src = "../static/best-ofs/res/projectsbutton.png";       
    document.getElementById(div_input+"_button").src = "../static/best-ofs/res/"+div_input+"button_down.png";

    list = div_input;

    if (div_input == "musicvid") list = "musicvideo";
    if (div_input == "clay") list = "claymation";
    if (div_input == "3D") list = "3Danimation";
    if (div_input == "games") list = "2Dgame";
}