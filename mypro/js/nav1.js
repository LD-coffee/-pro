

define(['jquery'],function($){
    return{
        nav1:(function(){
            var $linkfont=$(".link");
            $linkfont.hover(function(){
                $(this).css({'color':'#ff6700'})
            },function(){
                $(this).css({'color':''})
            })
            $('#second li').hover(function(){
                $(this).css({"background":"#ff6700"});
            },function(){
                $(this).css({"background":""});
            })
        })()
    }
})