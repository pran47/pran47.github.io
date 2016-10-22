'use strict';

// Declare app level module which depends on views, and components
var appTmp = angular.module('appTmp', [
  'ngRoute',
  'angularScreenfull',
  'appTmp.login',
  'appTmp.dashboard',
  'appTmp.employee',
  'appTmp.view1',
  'appTmp.view2',
  'appTmp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);


/*
appTmp.run(['$rootScope', '$route', function($rootScope, $route) {
                
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {            
        
       
    });
    
}]);
*/

// MainCtrl
appTmp.controller('MainCtrl', function($scope, $http, $route, $routeParams, $location) {
                                
    $scope.currentPath = $location.path();
    
    if ( $scope.currentPath=='/login' ) {
        $('body').addClass('activeLogin');
    }
    
          
});