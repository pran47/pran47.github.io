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
    
    // Function for Match height
    $(function() {
        $('.match_height').matchHeight();
    });
    
    
    $scope.listEmployee = [{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"315","e_name":"ajmal","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Adoor, Kerala, India","email":"ajmal@cliffsupport.com","phn":"9961118102","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"229","e_name":"Dheeraj Gheevarghese","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"Android","address":"Alappuzha, Kerala, India","email":"dheeraj@cliffsupport.com","phn":"9497880304","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"228","e_name":"Anjaly R Nair","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Kottayam, Kerala, India","email":"anjali@cliffsupport.com","phn":"9446523995","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"227","e_name":"Renju AG","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"renju@cliffsupport.com","phn":"9633193631","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"226","e_name":"Saravanasumesh","e_role":"Admin","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"ccsaravanasumesh@gmail.com","phn":"0965698558","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"225","e_name":"SaravanaKumar","e_role":"Project Manager","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"saravana@cliffsupport.com","phn":"9656985589","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"143","id":"223","e_name":"Subhit Kodapully","e_role":"Project Manager","designation":"Software Engineer","dept":"MS DOTNET","platform":"ASPNET","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit2016@gmail.com","phn":"12167717728","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"10","id":"186","e_name":"Subhit Kodapully ","e_role":"Admin","designation":"Software Engineer","dept":"Finance","platform":"Banking","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit.kodapully@gmail.com","phn":"0789999999","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]}]
    
    
    
    
        // Function for add new employee
        $scope.sendPost = function() {            
            
            $scope.$watch('addEmp.new_e_name.$valid', function(newVal) {
                
                if ( newVal === true ) {
                    
                    $('.view_highlite').addClass('active');
                    setTimeout(function(){ $('.view_highlite').removeClass('active');}, 1000);

                    
                    // Sending New Name
                    var data = $.param({
                    json: JSON.stringify({
                            name: $scope.new_e_name
                        }) 
                    });
                    $http.post("/echo/json/", data).success(function(data, status) {
                            $scope.e_name = data;
                    })
                    
                } // End IF

                
            }); // End Watch
            
            
        } // End Fn sendPost
    
    
    
    

});
// End AddEmployeeCtrl





//Controller for Employee Listing
appTmp.controller('ListEmployeeCtrl', function($scope, $http, $location) {
    
    $scope.listEmployee = [{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"315","e_name":"ajmal","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Adoor, Kerala, India","email":"ajmal@cliffsupport.com","phn":"9961118102","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"229","e_name":"Dheeraj Gheevarghese","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"Android","address":"Alappuzha, Kerala, India","email":"dheeraj@cliffsupport.com","phn":"9497880304","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"228","e_name":"Anjaly R Nair","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Kottayam, Kerala, India","email":"anjali@cliffsupport.com","phn":"9446523995","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"227","e_name":"Renju AG","e_role":"Team Member","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"renju@cliffsupport.com","phn":"9633193631","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"226","e_name":"Saravanasumesh","e_role":"Admin","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"ccsaravanasumesh@gmail.com","phn":"0965698558","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"66","id":"225","e_name":"SaravanaKumar","e_role":"Project Manager","designation":"Software Engineer","dept":"Software","platform":"DotNet","address":"Trivandrum, Kerala, India","email":"saravana@cliffsupport.com","phn":"9656985589","u_name":null,"pwd":null,"blood_grp":"A+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"143","id":"223","e_name":"Subhit Kodapully","e_role":"Project Manager","designation":"Software Engineer","dept":"MS DOTNET","platform":"ASPNET","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit2016@gmail.com","phn":"12167717728","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]},{"platform1":0,"role1":0,"designation1":0,"department1":0,"p_id1":0,"e_id1":0,"d_id":"10","id":"186","e_name":"Subhit Kodapully ","e_role":"Admin","designation":"Software Engineer","dept":"Finance","platform":"Banking","address":"Cleaveland Rd, Pleasant Hill, CA, United States","email":"subhit.kodapully@gmail.com","phn":"0789999999","u_name":null,"pwd":null,"blood_grp":"O+","created_by":null,"created_date":null,"created_ip":null,"last_log_date":null,"last_log_ip":null,"status":"Active","description":null,"project":null,"drp_role":[]}]
    
    
        

});