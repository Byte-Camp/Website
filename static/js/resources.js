$(function switchCamp(camp){
    console.log(camp);
    $(".resource-info").each(function(i){
        console.log($(this).attr('id'));
        if($(this).attr('id') == camp){
            $(this).slideDown(1000);
        } else {
            $(this).slideUp(1000);
        }
    });
});