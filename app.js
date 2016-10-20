'use strict';

// Declare app level module which depends on views, and components
var appTmp = angular.module('appTmp', [
  'ngRoute',
  'appTmp.dashboard',
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