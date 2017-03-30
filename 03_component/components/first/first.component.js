'use strict';

var test;

angular
.module('angularStart')
/*
어떤 모듈에 이 컴포넌트를 선언할지 결정함.
이 모듈이 실행될때만 아래 컴포넌트가 제대로 동작함.
*/
.component('firstComponent', {
  // 컴포넌트 이름 이 이름을 html 으로 사용시 <first-component></first-component> 으로 사용해야 함.
  templateUrl: 'components/first/first.tem.html',
  bindings: {
    value: '='
  },
  controller: function($scope) {
    var vm = this;
    console.log(vm.value); // May not yet be available!
    vm.$onInit = function() {
      console.log(vm.value); // Guaranteed to be available!
      $scope.value = vm.value;
    }
    /*
    $postLink(),
    $onChanges(),
    $onDestroy()
     */
  },
  controllerAs: 'first'
  // template: '<div>hihihihi</div>',
});