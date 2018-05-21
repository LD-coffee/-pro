<?php
require "conn.rl.php";

if(isset($_POST['user'])){//前端ajax传输过来的额
	$username=$_POST['user'];//获取用户名
	$password=md5($_POST['password']);//获取密码
}else{
	exit('非法操作');
}

//匹配用户名和密码是否同时相等
$query="select * from data_base where user='$username' and pass='$password'";
$result=mysql_query($query);

if(mysql_fetch_array($result)){
	echo true;//登陆成功
}else{
	echo false;//登陆失败
}
?>