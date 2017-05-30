
$('.btn-minus').on('click', function(){
    if(parseFloat($(this).parent().siblings('input').val()) > 0){
        $(this).parent().siblings('input').val(parseFloat($(this).parent().siblings('input').val()) - 0.25);
    }
    
});

$('.btn-plus').on('click', function(){
    $(this).parent().siblings('input').val(parseFloat($(this).parent().siblings('input').val()) + 0.25);
});


/* 
//Get pay period with javascript//
i = 0; 
var d = new Date(new Date().getFullYear(), 0, 1);
while (d.getDay() != 1){
    d = new Date(new Date().getFullYear(), 0, i);
    i++;
}
var start_of_year = new Date(d);
var today = new Date();
var StartDate = new Date(start_of_year);
var i = 14;
while(true){
    if((today.getDate()-StartDate.getDate() < 14) && (StartDate.getMonth() == today.getMonth())){
        break;
    }
    StartDate.setDate(StartDate.getDate()+14);
}
var EndDate = new Date(StartDate);
EndDate.setDate(EndDate.getDate()+14)
var month = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
start = month[StartDate.getMonth()]+' '+StartDate.getDate();
end = month[EndDate.getMonth()]+' '+EndDate.getDate();
//document.getElementById('pay-period').innerHTML = 'Pay Period: '+start+' - '+end;

nextDay = new Date(StartDate);
for (i=0; i<10; i++){
    document.getElementById('day'+(i+1)).innerHTML = '&nbsp'+nextDay.getDate()+'&nbsp';
    nextDay.setDate(nextDay.getDate()+1);
    if (nextDay.getDay() == 6){
        nextDay.setDate(nextDay.getDate()+2);
    }
}

//GET LOCATION TO SHORTEN LOCATIONS LIST//
$( document ).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
});
function showPosition(position) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    geocoder.geocode(
        {'latLng': latlng}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var add= results[0].formatted_address ;
                        var  value=add.split(",");

                        count=value.length;
                        country=value[count-1];
                        state=value[count-2];
                        city=value[count-3];
                        alert("city name is: " + city);
                    }
                    else  {
                        alert("address not found");
                    }
            }
             else {
                alert("Geocoder failed due to: " + status);
            }
        }
    );
    //alert("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
}
*/  