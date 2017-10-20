$( ".glyphicon-check" ).click(function() {
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
});

function switchCamp(camp){
    //if (camp == "#camp-info-default"){
    //    $(camp).show();
    //}
    //else {
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
