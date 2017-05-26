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

/*
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

    $('.camp-selection-container img').click(function(e) {
        var src = $(e.target).attr('src');
        var camp = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
        $('.camp-info').hide();
        $('#camp-info-' + camp).show();
        $('.camp-selection-container img').css('height', '75px');
        $(e.target).css('height', '100px');
    });

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
    
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });

    //makeHeader('clay-header', {'icon':'clay','camp name':'Claymation'});
});
*/