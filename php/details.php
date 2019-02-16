
<?php
require "conn.php";

if(isset($_GET['sid'])){
     $sid=$_GET['sid'];
}
 
$result=mysql_query("select * from lives where sid = '$sid'");
$piscarr=array();
for($i=0;$i<mysql_num_rows($result);$i++){
    $piscarr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
}

echo json_encode($piscarr);



?>