$( ".glyphicon-check" ).click(function() {
    var id = this.id;
    id = id.split('III');
    var container = id[0]; id = id[1];
    if (id.indexOf('_') > -1 || id.indexOf('-') > -1) {
        $('#').click(glyphCheck(id, container));

        if($(this).siblings().attr("data-toggle") == "collapse"){
            $(this).siblings().attr( "data-toggle", "" );
        }
        else {
            $(this).siblings().attr( "data-toggle", "collapse" );
        }
    }
    else { 
        if (this.style.color == "green"){
            switchGlyph([id], container, "unchecked", "check", "black");
            switchDisplay([id+"-S"], container, "none", -1);
        }
        else{
            switchGlyph([id], container, "check", "unchecked", "green");
            switchDisplay([id+"-S"], container, "block", 1);
        }
    }
});

function glyphCheck(id, container) {
    var s = id.split('-');
    var path = document.getElementById(container+"III"+id).src.split('/');
    var src = path[path.length-1];
    var camp = src.slice(0,-4);
    var not_camp = document.getElementsByClassName('not-'+camp);
    var camp = document.getElementsByClassName(camp);
    var arrChk = []; var arrUnchk = [];
    var badges = document.getElementsByClassName(container+'-badge');

    if (s[0] === id) {
        var arrChk = id.split('_');
    }
    else {
        var arrChk = s[0].split('_');
        var arrUnchk = s[1].split('_');
    }

    for (i=0; i<badges.length; i++){
        badges[i].innerHTML = 0;
    }

    switchGlyph(arrChk, container, "check", "unchecked", "green");
    switchGlyph(arrUnchk, container, "unchecked", "check", "black");

    switchDisplay(camp, container, "block", 1);
    switchDisplay(not_camp, container, "none", 0);
}

function switchGlyph(arr, container, add, remove, color){
    for (i=0; i<arr.length; i++){
        $("#"+container+"III"+arr[i]).removeClass("glyphicon-"+remove);       
        $("#"+container+"III"+arr[i]).addClass("glyphicon-"+add);
        document.getElementById(container+"III"+arr[i]).style.color = color;
        //$(this).parent().children(".res-thumb").removeClass(" res-thumb-bw");
    }
}

function switchDisplay(arr, container, display, num){
    for (i=0; i<arr.length; i++){
        try { var tag_id = arr[i].id.split('-'); }
        catch(err) { var tag_id = arr[i].split('-'); }
        $( "[id^='"+tag_id[0]+"'][id$='"+tag_id[1]+"']" ).css({ 'display': display });
        num *= $( "[id^='"+tag_id[0]+"'][id$='"+tag_id[1]+"']" ).length;
        changeBadge(container+"-"+tag_id[1], num);
    }
}

function changeBadge(id, num){
    var value = parseInt(document.getElementById(id).innerHTML);
    value += num;
    document.getElementById(id).innerHTML = value;
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