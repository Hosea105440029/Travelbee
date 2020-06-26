$(document).ready(function(){

    // 按鈕hover效果
    $('#btn_1').mouseenter(function(){
        $(this).attr("src","img/button_use_T.png");
    });
    $('#btn_1').mouseleave(function(){
        $(this).attr("src","img/button_use.png");
    });
    $('#btn_2').mouseenter(function(){
        $(this).attr("src","img/button_bebee_T.png");
    });
    $('#btn_2').mouseleave(function(){
        $(this).attr("src","img/button_bebee.png");
    });
    $('#btn_3').mouseenter(function(){
        $(this).attr("src","img/send_t.png");
    });
    $('#btn_3').mouseleave(function(){
        $(this).attr("src","img/send.png");
    });

});



