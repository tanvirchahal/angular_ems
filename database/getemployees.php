<?php 
    require('connect.php');
    
    $result = mysqli_query($con,"select * from employees");
    while($record = mysqli_fetch_array($result)){
        $arr[] = $record;
    }
    
    echo json_encode($arr);
?>