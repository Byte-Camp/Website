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

    /* Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });*/
    
    //makeHeader('clay-header', {'icon':'clay','camp name':'Claymation'});
});

function makeHeader(targetId, replacements){
    var temp = "<div class='text-center'>" +
                    "<img src='../static/img/icons/{{ICON}}.png' style='display:inline; width: 50px;'>" +
                    "<h1 class='text-center' style='display: inline; line-height: 50px; vertical-align: middle; padding-left:20px; padding-right: 20px;'>{{CAMP NAME}}</h1>" +
                    "<img src='../static/img/icons/{{ICON}}.png' style='display:inline; width: 50px;'>" +
                "</div><hr>";
    temp = btemplater(temp, replacements);
    document.getElementById(targetId).innerHTML = temp;
    
}


function btemplater(temp, replacements){
    var start = 0; var end; var word;
    while(temp.indexOf('{{', start) > -1){
        start = temp.indexOf('{{') + 2;
        end = temp.indexOf('}}');
        word = temp.substring(start,end).toLowerCase();
        if(replacements.hasOwnProperty(word)){
            temp = temp.replace('{{' + word.toUpperCase() + '}}', replacements[word]);
        }
    }
    return temp;  
}