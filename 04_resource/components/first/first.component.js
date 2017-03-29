'use strict';

angular
.module('angularStart')
/*
어떤 모듈에 이 컴포넌트를 선언할지 결정함.
이 모듈이 실행될때만 아래 컴포넌트가 제대로 동작함.
*/
.component('firstComponent', {
  // 컴포넌트 이름 이 이름을 html 으로 사용시 <first-component></first-component> 으로 사용해야 함.
  templateUrl: 'components/first/first.tem.html',
  // template: '<div>hihihihi</div>',
  controller: function($scope) {

    $scope.promise1 = 'Not Loaded';
    $scope.promise2 = 'Not Loaded';
    $scope.promise3 = 'Not Loaded';

    var 첫번째 = function() {
      return new Promise(function(success, fail) {
        setTimeout(function() {
          $scope.promise1 = 'Done';
          $scope.$apply();
          success(1);
        }.bind(this), 1500);
      });
    }

    var 두번째 = function() {
      return new Promise(function(success, fail) {
        setTimeout(function() {
          $scope.promise2 = 'Done';
          $scope.$apply();
          success(1);
        }.bind(this), 1500);
      });
    }

    var 세번째 = function() {
      return new Promise(function(success, fail) {
        setTimeout(function() {
          $scope.promise3 = 'Done';
          $scope.$apply();
          success(1);
        }.bind(this), 1500);
      });
    }

    첫번째()
    .then(두번째)
    .then(세번째);

  }
});