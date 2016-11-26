<?php 
    require('connect.php');
    
    $data = json_decode(file_get_contents('php://input'));
    $empname = $data->name;
    $empaddr = $data->addr;
    $empid;
    
    if(isset($empname)){
        $getId = mysqli_query($con,"select count(*) from employees");
        if(mysqli_num_rows($getId)>0){
            $id = mysqli_fetch_array($getId);
            $empid = $id[0]+1;
        } else{
            $empid = 1;
        }
        mysqli_query($con,"insert into employees (empid, empname,empaddr) values ($empid,'$empname','$empaddr')");
    }
?>