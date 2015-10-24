'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$provide',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/placehold');

    $stateProvider.state('view1', {
      url: '/view1',
      templateUrl: 'app/view1/view1.html'
    });

    $stateProvider.state('view2', {
      url: '/view2',
      templateUrl: 'app/view2/view2.html'
    });
  }]);