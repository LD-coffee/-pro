define(['jquery'],function($){
    return{
        subnav:(function(){

            var $navitem=$(".header-nav .nav-item");
            var $itemchild=$(".item-children");
            $navitem.hover(function(){
                $itemchild.css({"display":"block"})
            },function(){
                $itemchild.css({"display":"none"})
            })


            var ajax=new XMLHttpRequest();
			ajax.open('get','http://127.0.0.1/mypro/php/conn.php',true);
			ajax.send();
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4){
					var arr=JSON.parse(ajax.responseText);
					console.log(arr);
					var oUl3=document.querySelector('.children-box .children-list');
					var html='';
					for(var i=0;i<5;i++){
                        html+= `
                                <li sid=${arr[i].sid}>
                                    <div class="figure-thumb">
                                        <a href=""><img hright="160" width="110" src="${arr[i].pic}"></a>
                                    </div>
                                    <div><a href="">${arr[i].title}</a></div>
                                    <div class=""price>${arr[i].price}</div>
								</li>`;
					}
                    oUl3.innerHTML=html+`<div style="clear:both"></div>`;}}


        })()
    }
})