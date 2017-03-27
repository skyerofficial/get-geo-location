var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
var mapKey = "AIzaSyCTPANDaNQMRYRGR8z9UPy8SQdokC30rbk";
var showOutput = function(place){
    place = place.replace(" ","+");
    var url = baseUrl + "?address=" + place + "&key=" + mapKey;
    console.log(url);
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
            form.hide();
            output.show();
            if(response.status != "ZERO_RESULTS"){
                console.log(response.results[0].formatted_address);
                lat = response["results"][0]["geometry"]["location"]["lat"];
                response["results"][0]["geometry"]["location"]["lng"];
            }
            else {
                    console.log("error: fetching location coordinates");
            }
        }
    });
};
