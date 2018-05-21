$(function(){
    var bstop=true;//不通过
    var usereg=/^([\u4e00-\u9fa5]|[\w\-]){3,15}$/;
    $('#username').on('blur',function(){
        var username=$(this).val();//获取用户名值
        if(username!=''){//检测用户名是否为空
            if(usereg.test(username)){//检测用户名是否满足正则
                //将当前的用户名给后端，后端和数据库进行匹配，不管是否存在，后端返回结果
                $.ajax({
                    type:'post',
                    url:'http://127.0.0.1/mypro/php/reg.php',
                    data:{
                        user:username//获取用户名给后端
                    },
                    success:function(d){
                        if(d){
                            $('#username').next('span').css('color','red').html('用户名已存在');
                            bstop=true;
                        }else{
                            $('#username').next('span').css('color','green').html('√');
                            bstop=false;
                        }
                    }
                })
            }else{
                $(this).next('span').css('color','red').html('格式不正确');
                bstop=true;
            }
        }else{
            $(this).next('span').css('color','red').html('用户名不能为空');
            bstop=true;
        }
    });
    
    
    $('form').on('submit',function(){//验证不通过无法提交的
        if(bstop){
            return false;//阻止按钮跳转。
        }
    });
});