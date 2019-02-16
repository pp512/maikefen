<?php
//数据库连接
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
$conn=@mysql_connect(HOST,USERNAME,PASSWORD);//@:简单的容错处理。
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('maikefen');
	mysql_query('set names utf8');


	
	//mysql_close($conn);//关闭数据库
?>