<?php 
    require('connect.php');
    
    $data = json_decode(file_get_contents("php://input"));
    $empid = $data->empid;
    $empname = $data->empname;
    $empaddr = $data->empaddr;
    
    mysqli_query($con,"update employees set empname='$empname',empaddr='$empaddr' where empid=$empid");
    
    
?>