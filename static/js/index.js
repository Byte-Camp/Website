var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

var array = ['Coding', '2D Animation', 'Music Video', 'Claymation', '2D Game Design', '3D Game Design', '3D Animation', 'VFX'];
var i=0;
setTimeout(function(){
    setInterval(function(){
        $('#camp-switch').removeClass('hatch');
    }, 3000);
},2000);
setInterval(function(){
    $('#camp-switch').text(array[i]);
    i = (i < 7) ? i + 1 : 0;
    $('#camp-switch').addClass('hatch');
}, 3000);