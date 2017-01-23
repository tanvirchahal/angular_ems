<?php 
    require('connect.php');
    
    $data = json_decode(file_get_contents("php://input"));
    $empid = $data->empid;
    
    mysqli_query($con,"delete from employees where empid=$empid");
    
    echo json_encode($empid);
?>