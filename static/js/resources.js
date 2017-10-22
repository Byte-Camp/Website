$( ".glyphicon-check" ).click(function() {
    var id = this.id;
    if (id.indexOf('_') > -1 || id.indexOf('-') > -1) {
        $('#').click(glyphCheck(id));
    }
    else {
        if (this.style.color == "green"){
            $(this).removeClass("glyphicon-check");
            $(this).addClass("glyphicon-unchecked");
            this.style.color = "";
            //$(this).parent().children(".res-thumb").addClass(" res-thumb-bw");
        }
        else{
            $(this).removeClass("glyphicon-unchecked");
            $(this).addClass("glyphicon-check");
            this.style.color = "green";
            //$(this).parent().children(".res-thumb").removeClass(" res-thumb-bw");
        }
    }

});

function glyphCheck(t) {
    var s = t.split('-');
    if (s[0] === t) {
        var arrChk = t.split('_'); 
        var arrUnchk = [];
    }
    else {
        var arrChk = s[0].split('_');
        var arrUnchk = s[1].split('_');
    }

    for (i=0;i<arrChk.length;i++){       
        $("#"+arrChk[i]).addClass("glyphicon-check");
        $("#"+arrChk[i]).removeClass("glyphicon-unchecked");
        document.getElementById(arrChk[i]).style.color = "green";
    }
    for (i=0;i<arrUnchk.length;i++){       
        $("#"+arrUnchk[i]).removeClass("glyphicon-check");
        $("#"+arrUnchk[i]).addClass("glyphicon-unchecked");
        document.getElementById(arrUnchk[i]).style.color = "black";
    }
}
/*
function switchCamp(camp){
    if (camp == "#camp-info-default"){
        $(camp).show();
    }
    else {
    $(".resource-info").each(function(i){
        if($(this).attr('id') == "camp-info-" + $(camp).attr('value')){
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    //}
}

$(document).on('ready', function(){
    switchCamp("#camp-info-default");
    $(".camp-selection-container img").hover(
        function(){
            $('#camp-name-hover').text($(this).attr('alt'));
        },
        function(){
            $('#camp-name-hover').text("Choose a camp");
        }
    );
})
*/