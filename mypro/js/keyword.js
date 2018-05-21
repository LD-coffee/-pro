var ajax=new XMLHttpRequest();
			ajax.open('get','http://127.0.0.1/mypro/php/conn.php',true);
			ajax.send();
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4){
					var arr=JSON.parse(ajax.responseText);
					console.log(arr);
					var oUl2=document.querySelector('.result-list');
					var html='';
					for(var i=0;i<arr.length;i++){
                        html+= `
                            <li sid="${arr[i].sid}">
                                <a href="">${arr[i].title}
                                    <span>约有${arr[i].sid}件</sapn>
                                </a>
                            </li>
                                `;
					}
                    oUl2.innerHTML=html;}}

$('.search-text').focus(function(){
    $('.search-form input').css({"border-color":"#ff6700"});
    $('.keyword-list').css({"display":"block"})
})
$('.search-text').blur(function(){
    $('.search-form input').css({"border-color":""});
    $('.keyword-list').css({"display":""})
})