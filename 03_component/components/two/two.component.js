'use strict';

angular
.module('angularStart')
/*
어떤 모듈에 이 컴포넌트를 선언할지 결정함.
이 모듈이 실행될때만 아래 컴포넌트가 제대로 동작함.
*/
.component('twoComponent', {
  // 컴포넌트 이름 이 이름을 html 으로 사용시 <two-component></two-component> 으로 사용해야 함.
  templateUrl: 'components/two/two.tem.html',
  // template: '<div>hihihihi</div>',
  controller: function($scope) {
    // alert('두번째');
  }
});