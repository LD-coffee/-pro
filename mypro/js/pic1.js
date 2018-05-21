var ajax=new XMLHttpRequest();
			ajax.open('get','http://127.0.0.1/mypro/php/conn1.php',true);
			ajax.send();
			ajax.onreadystatechange=function(){
				if(ajax.readyState==4){
					var arr=JSON.parse(ajax.responseText);
					var oUl=document.querySelectorAll('.page-main .tab-content');
					var html='';
					var sbox='';
					for(var i=0;i<7;i++){
                        html+= `
                                <li class="brick-item brick-item-m" sid=${arr[i].sid}>
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
					sbox+=`
						<li class="brick-item brick-item-s">
							<div class="figure-img">
								<a><img src="https://i1.mifile.cn/a1/pms_1490756071.3088664!220x220.png"></a>
							</div>
							<h3 class="title"><a>Yeelight LED</a></h3>
							<p class="price">379元</p>
						</li>
						<li class="brick-item brick-item-s">
							<div class="figure-img iconfont icon-jiantou">
							</div>
							<h3 class="title"><a>浏览更多</a></h3>
							<p class="price">家居</p>
						</li>
					`
					for( var i=0;i<oUl.length;i++){
						oUl[i].innerHTML=html+sbox;
					}
				}}
					
                    