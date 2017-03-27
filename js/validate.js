var isEmpty = function (v) {
    if(( v == null ) || ( v == "")){
        return true;
    }
    return false;
}

$(document).ready( function(){
    $( '#theForm' ).submit( function( e ){
        e.preventDefault();
        var i = $("#q").val();
        if(isEmpty(i)){
            var err = $(".error");
            err.html("Input Can't be Empty!")
            err.removeClass("hide");
            var q = $(".question");
            q.addClass("animated shake");
            return false;
        }
    });
});