<?php
include "conn.php";
$result=mysql_query("select * from lives");//返回结果集，


	$piclist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$piclist[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}

	echo json_encode($piclist);//得到数据的接口


    //mysql_close($conn);//关闭数据库

?>