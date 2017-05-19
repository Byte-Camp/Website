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
