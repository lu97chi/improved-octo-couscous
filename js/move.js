$(document).ready(function(){
    $('#inicio').on('click', function(e){
        var caracteristicas = $('#caracteristicas').offset().top;
        e.preventDefault();
        $('html, body').animate({
            scrollTop:caracteristicas
        },500)
    } )
    
    $('#precio').on('click', function(e){
        var price = $('#prices').offset().top;
        e.preventDefault();
        $('html , body').animate({
            scrollTop:price+50
        },500)
    })
    
    $('#contacto').on('click', function(e){
        var contacto = $('#contact').offset().top;
        e.preventDefault();
        $('html, body').animate({
            scrollTop:contacto
        },500)
    })
}());