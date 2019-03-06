$(document).ready(function(){
    $("#courses").css("display","none")
    $(".left-nav").click(function () {
        $(".left-nav").css("font-weight","normal");
        $(this).css({"font-weight":"bold","font-size":"17px"})
    })
    $("#expansion").click(function () {
        $("#courses").fadeToggle()
    })

});