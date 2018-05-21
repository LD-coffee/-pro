

define(['jquery'],function($){
    return{
        top:(function(){
            $(".shop_con").animate({height:"0"});
            $("#shop").hover(
                function(){
                    $(this).css({"backgroundColor":"#fff","color":"#fb0"});
                    $("#shop span").css({"color":"#fb0"});
                    $(".shop_con").animate({height:"70px","padding-top":"15px"},200)
                },
                function(){
                    $(this).css({"backgroundColor":"","color":""});
                    $("#shop span").css({"color":""});
                    $(".shop_con").animate({height:"0","padding-top":"0"},200)
                }
            )



            //滚动条

            $(document).ready(function(){
                $(".headr-right-bar").scroll(function(){
                    var scroll_top=$(".headr-right-bar").scrollTop();
                    if(scroll_top>=100){
                        $(".bar-totop").css("display","block")
                    }else{
                        $(".bar-totop").css("display","")
                    }
                })
            })
        })()
    }
})

