'use strict';

angular.module('appTmp.employee', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-employee', {
    templateUrl: 'views/employee/add.html',
    controller: 'AddEmployeeCtrl'
  });
}])

.controller('AddEmployeeCtrl', [function() {
    
    

}]);