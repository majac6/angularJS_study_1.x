'use strict';

angular
.module("angularStart", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('home', {
    url: '/home',
    template: '<first-component></first-component>'
  })
  .state('home.two', {
    // parent: 'home',
    url: '/home/two',
    template: '<two-component></two-component>'
  })
  .state('home.two.three', {
    parent: 'home',
    url: '/three',
    template: '<three-component></three-component>'
  })
}])