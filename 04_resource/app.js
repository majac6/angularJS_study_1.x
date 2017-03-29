'use strict';

angular
.module("angularStart",[
  'ui.router', 
  'ui.grid',
  'ngResource',
  'shared.conferRoom'
])
// .config(['$qProvider', function($qProvider) {
//   // ui-grid 타이틀 클릭시 에러 제거를 위해 사용함. ui-grid 자체 오류
//   $qProvider.errorOnUnhandledRejections(false);
// }])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/home");

  $stateProvider
  .state('home', {
    url: '/home',
    template: '<first-component></first-component>'
  })
  .state('home.two', {
    parent: 'home',
    url: '/two',
    template: '<two-component></two-component>',
  })
  .state('home.two.three', {
    url: '/three',
    template: '<three-component></three-component>'
  })
}])
// .controller('MainCtrl', function ($scope) {

//   $scope.myData = [
//     {
//         "firstName": "Cox",
//         "lastName": "Carney",
//         "company": "Enormo",
//         "employed": true
//     },
//     {
//         "firstName": "Lorraine",
//         "lastName": "Wise",
//         "company": "Comveyer",
//         "employed": false
//     },
//     {
//         "firstName": "Nancy",
//         "lastName": "Waters",
//         "company": "Fuelton",
//         "employed": false
//     }
// ];
// });;