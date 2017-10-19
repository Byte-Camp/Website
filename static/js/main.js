/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 * Code licensed under Byte Camp Education Society
 */

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

$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('#navbar').addClass('scrolled-nav');
        } 
        else if (scrollTop < 100) {
            $('#navbar').removeClass('scrolled-nav');
        }
    });
});