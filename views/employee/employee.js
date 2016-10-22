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
appTmp.controller('AddEmployeeCtrl', [function() {
    
    

}]);



//Controller for Employee Listing
appTmp.controller('ListEmployeeCtrl', [function() {
    
    

}]);