$(document).ready(function(){
    $(".caja").click(function(){
        $(this).addClass("seleccionar ");
    });

    $(".caja").dblclick(function(){
        $(this).removeClass("seleccionar ");
    });

});