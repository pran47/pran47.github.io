'use strict';


angular.module('appTmp.login', ['ngRoute']);

appTmp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
});



// LoginCtrl
appTmp.controller('LoginCtrl', function($scope, $http, $route, $routeParams, $location) {
                                
    $scope.currentPath = $location.path();
    
          
});
    