'use strict';

angular
.module('twoComponent_module')
/*
어떤 모듈에 이 컴포넌트를 선언할지 결정함.
이 모듈이 실행될때만 아래 컴포넌트가 제대로 동작함.
*/
.component('twoComponent', {
  // 컴포넌트 이름 이 이름을 html 으로 사용시 <two-component></two-component> 으로 사용해야 함.
  templateUrl: 'components/two/two.tem.html',
  // template: '<div>hihihihi</div>',
  controller: function($scope, $modal) {

    // https://circlingthesun.github.io/angular-foundation-6/
    // Foundation7 Modal 관련은 위 참조.
    $scope.open = open;

    function open(flag) {
      if(flag) {
        var params = {
          templateUrl: 'components/calendar/calendar.tmp.html',
          // template: '<three-component></three-component>',
          // resolve: {
          //   items: function() {
          //     alert(123);
          //   },
          // },
          controller: function($scope, $modalInstance) {

          }
        };
      } else {
        var params = {
          // templateUrl: 'myModalContent.html',
          template: '<three-component></three-component>',
          controller: function($scope, $modalInstance) {
          }
        };
      }

      var modalInstance = $modal.open(params);

      modalInstance.result.then(function() {
        // What is it?
      }, function() {
        // Modal Close
        console.log('Modal Closed');
      });

      modalInstance.opened.then(function() {
        console.log('Modal Opened');
        $('#calendar').fullCalendar({
          events: [
            {
              title: 'All Day Event',
              start: '2017-03-01'
            },
            {
              title: 'Long Event',
              start: '2017-03-07',
              end: '2017-03-10'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2017-03-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2017-03-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2017-03-11',
              end: '2017-03-13'
            },
            {
              title: 'Meeting',
              start: '2017-03-12T10:30:00',
              end: '2017-03-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2017-03-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2017-03-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2017-03-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2017-03-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2017-03-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2017-03-28'
            }
          ]
        });

      }, function() {
        // console.log('Hi');
        // What is it??
      });

    };

    $scope.myData = [
      {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
      },
      {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
      },
      {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
      }
    ];
  }
});