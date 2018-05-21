


define(['jquery'],function($){
    return{
        slider:(function(){
            var $index=$(".slider-list-btn").index()
        var bstop=true;
        var timer=null;
        $(".slider-list-btn").click(function(){
            $index=$(this).index();
            $(this).css("opacity",1).siblings("opacity",0)
            $(this).addClass("active").siblings(".slider-list-btn").removeClass("active");
            $(".slider-img img").eq($index).animate({opacity:1},100).siblings(".slider-img img").animate({opacity:0},100)
            console.log($index);
        })
        var $left=$(".btn-left");
        var $right=$(".btn-right");
        $right.click(function(){
            if(bstop){
                $index++;
            if($index==5){
                $index=0
            }
            fn()
            }
            bstop=false
        }
    )
    function right(){
            if(bstop){
                $index++;
            if($index==5){
                $index=0
            }
            fn()
            }
            bstop=false
    }
        $left.click(function(){
            if(bstop){
                $index--;
            console.log($index)
            if($index==-1){
                $index=4
            }
            fn()
            }
            bstop=false;
        })
        
        var $timer=setInterval(right,4000);


        function fn(){
            $(".slider-img img").eq($index).animate({opacity:1},400,function(){
                bstop=true
            }).siblings(".slider-img img").animate({opacity:0},400)
            $(".slider-list-btn").eq($index).addClass("active").siblings(".slider-list-btn").removeClass("active");
        }
        })()
    }
})