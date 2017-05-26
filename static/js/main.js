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

var camps9yr = ['2dtab', 'clay', 'intro', 'cyoa', 'mv'];
var camps11yr = ['2d', '3d', '3dgames', 'baa'];

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


    //$('.camp-info').hide();
    //$('#camp-info-clay').show();

    /*$('.camp-selection-container img').click(function(e) {
        var src = $(e.target).attr('src');
        var camp = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
        $('.camp-info').hide();
        $('#camp-info-' + camp).show();
        $('.camp-selection-container img').css('height', '75px');
        $(e.target).css('height', '100px');
    });*/

    $('#btn-group-age').click(function(e){

        if(e.target.id === "9yrbutton"){
            $('.camp-selection-container div').each(function(index){
                if(camps9yr.indexOf($(this).attr('id')) > -1){
                    $(this).show('500');
                } else {
                    $(this).hide('500');
                }
            });
        } else if(e.target.id === '11yrbutton'){
            $('.camp-selection-container div').each(function(index){
                if(camps11yr.indexOf($(this).attr('id')) > -1){
                    $(this).show('500');
                } else {
                    $(this).hide('500');
                }
            });
        } else if(e.target.id === 'allyrbutton'){
            $('.camp-selection-container div').show('500');
        }

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



// init Isotope
var $grid = $('.row_camps').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

