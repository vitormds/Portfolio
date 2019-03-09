$(function (e) {

    function redimensinar() {

        var altura = $(window).height();
        $('.box1').css('height', altura);

    }

    $('#sobre').click(function (e) {
        $('html,body').animate({ scrollTop: $('.h1s').offset().top }, 1000);

    })

    $('#sobr').click(function (e) {
        $('html,body').animate({ scrollTop: $('.h2s').offset().top }, 1000);
    })

    $('#sob').click(function (e) {
        $('html,body').animate({ scrollTop: $('.h4s').offset().top }, 1000);
    })

    $('#subindo').click(function (e) {
        $('html,body').animate({ scrollTop: $('.menu').offset().top }, 500);
    })

        $(window).resize(function (e) {
            redimensinar();
        })

    redimensinar();


})