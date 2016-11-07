// jQuery to move the side menu on scroll (with the nav bar)
function moveSidebar() {
    if ($(".navbar").offset().top > 50) {
        $(".class-picker").addClass("sidebar-up");
    } else {
        $(".class-picker").removeClass("sidebar-up");
    }
}

$(window).scroll(moveSidebar);
$(document).ready(moveSidebar);


function switchCamp(camp){
    console.log(camp);
    $(".resource-info").each(function(i){
        console.log($(this).attr('id'));
        if($(this).attr('id') == camp){
            $(this).slideDown(1000);
        } else {
            $(this).slideUp(1000);
        }
    });
}