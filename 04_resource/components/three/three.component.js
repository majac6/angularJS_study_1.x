'use strict';

angular
.module('angularStart')
/*
어떤 모듈에 이 컴포넌트를 선언할지 결정함.
이 모듈이 실행될때만 아래 컴포넌트가 제대로 동작함.
*/
.component('threeComponent', {
  // 컴포넌트 이름 이 이름을 html 으로 사용시 <three-component></three-component> 으로 사용해야 함.
  templateUrl: 'components/three/three.tem.html',
  // template: '<div>hihihihi</div>',
  controller: function($scope, ConferRoom) {

    // http://ui-grid.info/docs/#/tutorial/102_sorting - 참조할 것!

    $scope.gridOptions = {
      enableColumnResizing: true,
      enableGridMenu: true,
      exporterMenuPdf: false,
      exporterIsExcelCompatible: true,
      exporterOlderExcelCompatibility: true,
      columnDefs: [
        { name: 'area', displayName: '지역', minWidth:150},
        { name: 'name', displayName: '회의실', minWidth:200, cellTemplate: '<div ng-click="this.grid.appScope.onRowClick(row.entity)" class="col-click ui-grid-cell-contents" ><u>{{this.grid.getCellValue(row, col)}}</u></div>'},
        { name: 'capacity', displayName: 'capacity1', minWidth: 90},
        { name: 'videoDesc', displayName: 'video', minWidth: 100},
        { name: 'networkDesc', displayName: 'telephone', minWidth: 100},
        { name: 'beamDesc', displayName: 'equipment', minWidth: 100},
      ],
    };

    $scope.onRowClick = function(row) {
      alert('clicked!!');
      // console.log(row);
    }

    var roomList = ConferRoom.query({region: 10}, function() {
      // 이곳에 function 을 활용하면 바로 $promise 를 활용할 수 있음.
      var temp = [];
      $.each(roomList,function(index,item) {
        temp.push(item);
        // jsondata to array
      });
      // console.log(temp);
      $scope.gridOptions.data = temp;
    });

    // promise 를 외부로 빼서 처리하기
    // var roomList = ConferRoom.query({region: 10});
    // roomList.$promise.then(function(res) {
    //   var temp = [];
    //   $.each(roomList,function(index,item) {
    //     temp.push(item);
    //     // jsondata to array
    //   });
    //   // console.log(temp);
    //   $scope.gridOptions.data = temp;
    // });

    // Local JSON 가져오기
    // ConferRoom.get(function(data){
    //   var temp = [];
    //   $.each(data.rooms,function(index,item) {
    //     temp.push(item);
    //     // jsondata to array
    //   });
    //   // console.log(temp);
    //   $scope.gridOptions.data = temp;
    // });
  }
});