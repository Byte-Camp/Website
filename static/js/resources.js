function switchCamp(camp){
    $(".resource-info").each(function(i){
        if($(this).attr('id') == "camp-info-" + $(camp).attr('value')){
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

$(document).on('ready', function(){

    $(".camp-selection-container img").hover(function(){
        $('#camp-name-hover').text($(this).attr('alt'));
    })

})
