'use strict';

angular.module('appTmp.employee', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-employee', {
    templateUrl: 'views/employee/add.html',
    controller: 'AddEmployeeCtrl'
  })
  .when('/list-employee', {
      templateUrl: 'views/employee/list.html',
      controller: 'ListEmployeeCtrl'
  });
}])



//Controller for Employee ADD
appTmp.controller('AddEmployeeCtrl', function($scope, $http, $location, $filter) {
    
    
    $scope.phoneNumberPattern = /^\+?\d{2}[ ]?\d{3}[ ]?\d{5}$/;
    
    
    // Function for Match height
    $(function() {
        $('.match_height').matchHeight();
    });
    
    
    $scope.listEmployee = [{
	    "photo": "1.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 315,
		"e_name": "ajmal",
		"e_role": "Team Member",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "PHP",
		"address": "Adoor, Kerala, India",
		"email": "ajmal@cliffsupport.com",
		"phn": "9961118102",
		"u_name": null,
		"pwd": null,
		"blood_grp": "A+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "2.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 229,
		"e_name": "Dheeraj Gheevarghese",
		"e_role": "Team Member",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "Android",
		"address": "Alappuzha, Kerala, India",
		"email": "dheeraj@cliffsupport.com",
		"phn": "9497880304",
		"u_name": null,
		"pwd": null,
		"blood_grp": "O+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "InActive",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "3.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 228,
		"e_name": "Anjaly R Nair",
		"e_role": "Team Member",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "DotNet",
		"address": "Kottayam, Kerala, India",
		"email": "anjali@cliffsupport.com",
		"phn": "9446523995",
		"u_name": null,
		"pwd": null,
		"blood_grp": "A+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "4.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 227,
		"e_name": "Renju AG",
		"e_role": "Team Member",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "DotNet",
		"address": "Trivandrum, Kerala, India",
		"email": "renju@cliffsupport.com",
		"phn": "9633193631",
		"u_name": null,
		"pwd": null,
		"blood_grp": "O+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "5.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 226,
		"e_name": "Saravanasumesh",
		"e_role": "Admin",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "DotNet",
		"address": "Trivandrum, Kerala, India",
		"email": "ccsaravanasumesh@gmail.com",
		"phn": "0965698558",
		"u_name": null,
		"pwd": null,
		"blood_grp": "A+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "6.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "66",
		"id": 225,
		"e_name": "SaravanaKumar",
		"e_role": "Project Manager",
		"designation": "Software Engineer",
		"dept": "Software",
		"platform": "DotNet",
		"address": "Trivandrum, Kerala, India",
		"email": "saravana@cliffsupport.com",
		"phn": "9656985589",
		"u_name": null,
		"pwd": null,
		"blood_grp": "A+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "7.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "143",
		"id": 223,
		"e_name": "Subhit Kodapully",
		"e_role": "Project Manager",
		"designation": "Software Engineer",
		"dept": "MS DOTNET",
		"platform": "ASPNET",
		"address": "Cleaveland Rd, Pleasant Hill, CA, United States",
		"email": "subhit2016@gmail.com",
		"phn": "12167717728",
		"u_name": null,
		"pwd": null,
		"blood_grp": "O+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "InActive",
		"description": null,
		"project": null,
		"drp_role": []
	},
	{
	    "photo": "8.jpg",
		"platform1": 0,
		"role1": 0,
		"designation1": 0,
		"department1": 0,
		"p_id1": 0,
		"e_id1": 0,
		"d_id": "10",
		"id": 186,
		"e_name": "Subhit Kodapully ",
		"e_role": "Admin",
		"designation": "Software Engineer",
		"dept": "Finance",
		"platform": "Banking",
		"address": "Cleaveland Rd, Pleasant Hill, CA, United States",
		"email": "subhit.kodapully@gmail.com",
		"phn": "0789999999",
		"u_name": null,
		"pwd": null,
		"blood_grp": "O+",
		"created_by": null,
		"created_date": null,
		"created_ip": null,
		"last_log_date": null,
		"last_log_ip": null,
		"status": "Active",
		"description": null,
		"project": null,
		"drp_role": []
	}
    ]
    

    
        // Function for add new employee    
        $scope.new_e_name_check = 0;
    
    
        $scope.sendPost = function() {            
            
            $scope.$watch('addEmp.new_e_name.$valid', function(newVal) {
                
                if ( newVal === true ) {
                    
                    // Highlite View block
                    $('.view_highlite').addClass('active');
                    setTimeout(function(){ $('.view_highlite').removeClass('active');}, 1000);
                    
                    
                    // Check exist            
                    
                    if ( $scope.new_e_name_check == '0' ) {
                        // Sending New Name (POST)
                        var data = $.param({
                        json: JSON.stringify({
                                name: $scope.new_e_name
                            })
                        });
                        $http.post("actions/post.php", data).success(function(data, status) {
                                $scope.e_name = data;
                        }).error(function(data) {
                            $scope.new_e_name_check = 1;
                            console.log($scope.new_e_name_check);
                        });
                    } else {
                        // Update Name (PUT)
                        var data = $.param({
                        json: JSON.stringify({
                                name: $scope.new_e_name
                            })
                        });
                        $http.put("/echo/json/", data).success(function(data, status) {
                                $scope.e_name = data;
                        });
                    }
                    

                    
                } // End IF

                
            }); // End Watch
            
            
        } // End Fn sendPost    
    
        
        // Check new input has focus
        $('.view_block').hide();
        $("#new_emp_name").focus(function() {
            $('.view_block').hide();
            $('.add_block').removeClass('col-md-6');
            $('.add_block').addClass('col-md-12');
        });
        
            

    
        // Employee add on Blur and Submit
        $scope.empAdd = function() {            
            if($scope.addEmp.$valid) {
                // Add to array
//                $scope.listEmployee.unshift({e_name:$scope.new_e_name_input});
//                $scope.new_e_name_input = "";

                
                // Sending New Name (POST)
                var data = $.param({
                json: JSON.stringify({
                        name: $scope.new_e_name_input
                    })
                });
                $http.post("actions/post.php", data).success(function(data, status) {
                        // $scope.e_name = data;
                        // Add to array
                        $scope.listEmployee.unshift({e_name:$scope.new_e_name_input});
                        $scope.new_e_name_input = "";
                }).error(function(data) {
                        console.log('Adding Failed');
                    
                        $scope.new_e_name_id_input = "315";                    
                        $scope.listEmployee.unshift({id: $scope.new_e_name_id_input, e_name: $scope.new_e_name_input, status: "Active"});
                        $scope.new_e_name_input = "";
                });
                
            } else {
                
            }            
        }
        
        
    
        
        // Select an employee from list
        $scope.empClick = function(item){            
            $('.add_block').removeClass('col-md-12');
            $('.add_block').addClass('col-md-6');
            $('.view_block').show();
            $('.thumb_bounce').removeClass('animate1 bounceIn');
            setTimeout(function(){
                $('.thumb_bounce').addClass('animate1 bounceIn');
            },1);
            $(function() {
                $('.match_height').matchHeight();
            });            
            $scope.currentEmpId = $(item.target).data('id');
            // Filter selected employee from all employees
            $scope.selectedEmployee = $filter('filter')($scope.listEmployee, {id: $scope.currentEmpId}, true);
            $scope.selectedEmployee = $scope.selectedEmployee[0];
        }
        
        
        // Send employee details (PUT)
        $('#viewEmpForm').change(function(){
            
            if($scope.viewEmp.$invalid){                
                //console.log('invalid');                
            }else {
                // Update Name (PUT)
                var data = $.param({
                    json: JSON.stringify({
                        id: $scope.selectedEmployee.e_name,
                        e_name: $scope.selectedEmployee.e_name,
                        designation: $scope.selectedEmployee.designation,
                        email: $scope.selectedEmployee.email,
                        phn: $scope.selectedEmployee.phn,
                        platform: $scope.selectedEmployee.platform,
                        dept: $scope.selectedEmployee.dept,
                        e_role: $scope.selectedEmployee.e_role,
                        blood_grp: $scope.selectedEmployee.blood_grp,
                        address: $scope.selectedEmployee.address
                    })
                });
                $http.put("/echo/json/", data).success(function(data, status) {
                    //$scope.e_name = data;
                });
            }
                
                        
        }); //End Fn send Details Post    
    
    
        // Employee status change
        $scope.employeeStatusChange = function(status){
            $scope.currentEmpStatusId = $(status.target).data('id');
            
            // Update Employee Status (PUT)
            var data = $.param({
                json: JSON.stringify({
                        id: $scope.currentEmpStatusId
                    })
                });
                $http.put("/echo/json/", data).success(function(data, status) {
                    //$scope.e_name = data;
                });
            
        }
        
    
    
    

});
// End AddEmployeeCtrl





//Controller for Employee Listing
appTmp.controller('ListEmployeeCtrl', function($scope, $http, $location) {
    
    $scope.listEmployee = [{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"315","e_name":"ajmal","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Adoor, Kerala, India","email":"ajmal@cliffsupport.com","phn":"9961118102","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"229","e_name":"Dheeraj Gheevarghese","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"Android","address":"Alappuzha, Kerala, India","email":"dheeraj@cliffsupport.com","phn":"9497880304","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"228","e_name":"Anjaly R Nair","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Kottayam, Kerala, India","email":"anjali@cliffsupport.com","phn":"9446523995","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"227","e_name":"Renju AG","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"renju@cliffsupport.com","phn":"9633193631","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"226","e_name":"Saravanasumesh","e_role":"Admin","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"ccsaravanasumesh@gmail.com","phn":"0965698558","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"225","e_name":"SaravanaKumar","e_role":"Project Manager","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"saravana@cliffsupport.com","phn":"9656985589","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"143","id":"223","e_name":"Subhit Kodapully","e_role":"Project Manager","designation":"Software Engineer","dept":"MS DOTNET","platform":"ASPNET","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit2016@gmail.com","phn":"12167717728","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"10","id":"186","e_name":"Subhit Kodapully ","e_role":"Admin","designation":"Software Engineer","dept":"Finance","platform":"Banking","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit.kodapully@gmail.com","phn":"0789999999","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]}]
    
    
        

});