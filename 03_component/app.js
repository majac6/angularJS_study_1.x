'use strict';

angular
.module("angularStart", ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('home', {
    url: '/home',
    template: '<first-component value="123"></first-component>'
  })
  .state('home.two', {
    // parent: 'home',
    url: '/two',
    template: '<two-component></two-component>'
  })
  .state('home.two.three', {
    // parent: 'two',
    url: '/three',
    template: '<three-component></three-component>'
  })
}])