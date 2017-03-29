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

    ConferRoom.get(function(data){
      var temp = [];
      $.each(data.rooms,function(index,item) {
        temp.push(item);
        // jsondata to array
      });
      console.log(temp);
      $scope.gridOptions.data = temp;
    });
  }
});