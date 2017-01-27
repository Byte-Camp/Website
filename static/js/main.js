/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
/*function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);*/

$(document).ready(function() {
// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    
    $('.camp-info').hide();
    $('#camp-info-2dtab').show();
    
    $('.camp-selection-container img').hover(function(e) {
        var src = $(e.target).attr('src');
        var camp = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
        $('.camp-info').hide();
        $('#camp-info-' + camp).show();
    });
    
    $('.camp-selection-container img').click(function(e) {
        $('.camp-selection-container img').css('height', '75px');
        $(e.target).css('height', '100px');
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });


    //For resources page side-nav
    $(".sidebar-nav li a").click(function(e) {
        console.log($(e.target).attr('value'));
    });
});