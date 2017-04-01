var isEmpty = function (v) {
    if(( v == null ) || ( v == "")){
        return true;
    }
    return false;
};


$(document).ready(function(){
    $('#theForm').submit(function(e){
        e.preventDefault();
        var i = $("#q").val();
        if(isEmpty(i)){
            var err = $(".error");
            err.html("Field Can't be Empty!")
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
        showOutput(i);
    });
});