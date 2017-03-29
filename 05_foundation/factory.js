'use strict';

angular.
module('shared.conferRoom', ['ngResource']).
factory('ConferRoom', function($resource) {
  return $resource('../resources/jsons/confer-rooms-10.json');
});