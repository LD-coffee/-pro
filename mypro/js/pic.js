var ajax=new XMLHttpRequest();
			ajax.open('get','http://127.0.0.1/mypro/php/conn.php',true);
			ajax.send();
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4){
					var arr=JSON.parse(ajax.responseText);
					console.log(arr);
					var oUl1=document.querySelector('.wrapper-list');
					var html='';
					for(var i=0;i<arr.length;i++){
                        html+= `
                                <li class="item-box-m" sid=${arr[i].sid}>
                                <a href="details.html"><div class="bg"></div></a>
                                <div class="content">
                                    <a class="thumb"><img src=${arr[i].pic}></a>
                                    <h3 class="title">
                                        <a>${arr[i].title}</a>
                                    </h3>
                                    <p class="desc">${arr[i].content}</p>
									<p class="price">${arr[i].price}</p>
                                </div>
								</li>`;
					}
                    oUl1.innerHTML=html;}}