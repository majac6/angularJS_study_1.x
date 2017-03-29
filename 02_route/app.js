var app = angular.module("angularStart", ['ui.router']);
// ui-router 를 사용하기 위해 모듈에 추가함.

app
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

  // $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise("/");

  $stateProvider
  // .state([[name]], {option})
  .state('main', {
    url: '/',
    templateUrl: 'pages/main/main.html',
    controller: MainController,
  })
  .state('subpage', {
    url: '/subpage',
    templateUrl: 'pages/subpage/subpage.html',
    controller: ''
  })
  .state('subpage2', {
    url: '/subpage2',
    template: '<div>hihihi</div>',
  })

}]);

app.run(function ($rootScope) {
  // App 실행시 최초 1번 load 됨.

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    console.log('Location Load Start');
  });

  $rootScope.$on('$stateChangeSuccess', function (event, next, current) {
    console.log('State Load End');
  });

});