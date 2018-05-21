define(['jquery'],function($){
    return{
        shangou:(function(){
            $mL=$(".xm-shangou .more-l");
            $mR=$(".xm-shangou .more-r");
            $sgmove=$(".xm-wrapper").width();
            $sgbox=$(".xm-wrapper ul");
            $mL.css("color","#d0d0d0");
            $mL.click(function(){
                fn(0);
                $mL.css("color","#d0d0d0");
                $mR.css("color","");
            })
            $mR.click(function(){
                fn(-$sgmove);
                $mR.css("color","#d0d0d0");
                $mL.css("color","");
            })
            function fn(x){
                $sgbox.animate({"margin-left":x+"px"},200)
            }
        })()
    }
})