$(document).ready(function(){

    $('.foot_click_1').mousedown(function(){
        $('.foot_gnb_con_1').css({
            height: 'auto'
        });
        $('.foot_click_1').css({
            display: 'none'
        });
        $('#foot_click_close_1').css({
            display: 'block'
        });
    });

    $('#foot_click_close_1').mousedown(function(){
        $('.foot_gnb_con_1').css({
            height: '0'
        });
        $('.foot_click_1').css({
            display: 'block'
        });
        $('#foot_click_close_1').css({
            display: 'none'
        });
    });


    $('.foot_click_2').mousedown(function(){
        $('.foot_gnb_con_2').css({
            height: 'auto'
        });
        $('.foot_click_2').css({
            display: 'none'
        });
        $('#foot_click_close_2').css({
            display: 'block'
        });
    });

    $('#foot_click_close_2').mousedown(function(){
        $('.foot_gnb_con_2').css({
            height: '0'
        });
        $('.foot_click_2').css({
            display: 'block'
        });
        $('#foot_click_close_2').css({
            display: 'none'
        });
    });


    $('.foot_click_3').mousedown(function(){
        $('.foot_gnb_con_3').css({
            height: 'auto'
        });
        $('.foot_click_3').css({
            display: 'none'
        });
        $('#foot_click_close_3').css({
            display: 'block'
        });
    });

    $('#foot_click_close_3').mousedown(function(){
        $('.foot_gnb_con_3').css({
            height: '0'
        });
        $('.foot_click_3').css({
            display: 'block'
        });
        $('#foot_click_close_3').css({
            display: 'none'
        });
    });

});