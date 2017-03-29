'use strict';

angular.
module('shared.conferRoom', ['ngResource']).
factory('ConferRoom', function($resource) {
  console.log('회의실 목록 가져오기 : ');
  if(ASF_GLOBAL.deployed) {
    return $resource(ASF_GLOBAL.serverHost + '/rest/roomList', {}, {
      get : {
        url:ASF_GLOBAL.serverHost + '/rest/room',
        method:'GET',
        isArray:false
      }
    });
  }
});