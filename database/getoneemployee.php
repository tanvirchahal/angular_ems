<?php 
    header('Content-Type: application/json');
    header('Content-Type: text/html; charset=utf-8');
    
    require('connect.php');
    
    $data = json_decode(file_get_contents("php://input"));
    $empid = $data->empid;
    
    $result = mysqli_query($con,"select * from employees where empid=$empid");
    while($record = mysqli_fetch_array($result)){
        $arr[] = $record;
    }
    
    echo json_encode($arr);
?>