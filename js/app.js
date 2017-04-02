var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
var mapKey = "AIzaSyCTPANDaNQMRYRGR8z9UPy8SQdokC30rbk";
var form  = $("#theForm");
var output = $("#output");
var placeHolder = $(".place");
var latHolder = $(".lat");
var lngHolder = $(".lng");
var lat;
var lng;

var showError = function(msg){
    var err = $(".error");
    err.html(msg);
    err.removeClass("hide");
    var q = $(".question");
    $('body').css('background-color','#EF5350');
    q.addClass("animated shake");
    window.setTimeout(function(){
        $('body').css('background-color','#3498db');
        q.removeClass("animated shake");
    },1200);
};

var showOutput = function(place){
    place = place.replace(" ","+");
    var url = baseUrl + "?address=" + place + "&key=" + mapKey;
    $.ajax({
        url: url,
        method: "GET",
        dataType: "JSON",
        success: function( response ){
            if(response.status != "ZERO_RESULTS"){
                place = place.replace("+"," ");
                if(place.length > 10){
                    place  = "<br>" + place;
                }
                placeHolder.html(place);
                lat = response["results"][0]["geometry"]["location"]["lat"];
                lng = response["results"][0]["geometry"]["location"]["lng"];
                latHolder.html(lat);
                lngHolder.html(lng);
                $('body').css('background-color','#2ecc71');
                form.hide();
                output.fadeIn();
            }
            else {
                    showError("No Place Found");
                    return false;
            }
        }
    });
};

//

var getLoc = function(){
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              place = " your Current Position";
              placeHolder.html(place);
              lat =  position.coords.latitude;
              lng =  position.coords.longitude;
              console.log(position);
              latHolder.html(lat);
                lngHolder.html(lng);
                $('body').css('background-color','#2ecc71');
                form.hide();
                output.fadeIn();
           
          }, function() {
            showError("Geolocation services failed!");
          });
        } else {
            showError("Your browser doesn\'t support geolocation.");
    }
};

$(".loc").on('click',function(){
    getLoc();
});
