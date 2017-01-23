var app = angular.module('employeesApp',['ngRoute']);

/* Routes */
app.config(['$routeProvider',function($routeProvider){
   $routeProvider.when('/',{
       templateUrl:'views/allemployees.html',
       controller:'allemployees'
   }).when('/addemployee',{
       templateUrl:'views/addemployee.html',
       controller:'addemployee'
   }).when('/editemployee/:id',{
       templateUrl:'views/editemployee.html',
       controller:'editemployee'
   }).otherwise({
       redirectTo:'/'
   });     
}]);

/* Controllers */
app.controller('allemployees',['$scope','$http',function($scope,$http){
    $scope.test = "Welcome to Employees Management System";

    $scope.getEmployee = function(){
        $http.get("database/getemployees.php").success(function(data){
           $scope.details = data; 
        });
    };
    
    $scope.deleteEmployee = function(empid){
        var request = {
           method: 'POST',
           url:'database/deleteemployee.php',
           data: {'empid':empid}
       };
        $http(request).success(function(data){
            
        });
    };
}]);

app.controller('addemployee',['$scope','$http',function($scope,$http){
    $scope.test = "Enter Details to save an Employee";
    
    $scope.addEmployee = function(employee){
        var request = {
            method:'POST',
            url:'database/addemployee.php',
            data: employee
        }
        $http(request).success(function(data){
           $scope.employee = ""; 
        });
    }
}]);


app.controller('editemployee',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    $scope.test = "Edit Employee";
    var empid = $routeParams.id;
    
    $scope.fetchDetails = function(){
       var request = {
           method: 'POST',
           url:'database/getoneemployee.php',
           data: {'empid':empid}
       };
       $http(request).success(function(data){
           $scope.empname= data[0].empname;
           $scope.empaddr= data[0].empaddr;
       }); 
    };
    
    $scope.editEmployee = function(){
        var request = {
           method:'POST',
           url:'database/editemployee.php',
           data: {'empid':empid,'empname':$scope.empname,'empaddr':$scope.empaddr}
        }
        
        $http(request).success(function(data){
            alert('Edited Successfully');
        });
    }
}]);


