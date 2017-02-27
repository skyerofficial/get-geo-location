var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
var mapKey = "AIzaSyCTPANDaNQMRYRGR8z9UPy8SQdokC30rbk";
var showOutput = function(place){
    place = place.replace(" ","+");
    var url = baseUrl + "?address=" + place + "&key=" + mapKey;
    var form  = $("#theForm");
    var output = $("#output");
    var placeHolder = $(".place");
    var latHolder = $(".lat");
    var lngHolder = $(".lng");
    var lat;
    var lng;
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
                placeHolder.html();
                lat = response["results"][0]["geometry"]["location"]["lat"];
                lng = response["results"][0]["geometry"]["location"]["lng"];
                latHolder.html(lat);
                lngHolder.html(lng);
                $('body').css('background-color','#2ecc71');
                form.hide();
                output.fadeIn();
            }
            else {
                    var err = $(".error");
                    err.html("No Place Found With Given Name")
                    err.removeClass("hide");
                    var q = $(".question");
                    $('body').css('background-color','#EF5350');
                    q.addClass("animated shake");
                    window.setTimeout(function(){
                        $('body').css('background-color','#3498db');
                        q.removeClass("animated shake");
                    },1200);
                    return false;
            }
        }
    });
};
