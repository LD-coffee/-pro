
define(['jquery'],function($){
    return{
        nav1:(
            $(function(){
                if(getCookie('UserName')){
                    $('.nav-rl').hide();
                    $('.admin').show().find('span').html('你好,'+getCookie('UserName'));
                }
                $('.admin a').on('click',function(){
                    delCookie('UserName','',-1);
                    $('.admin').hide();
                    $('.nav-rl').show();
                });
            })
        )()
    }
})