'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('apod.services', ['ngResource']).
    value('version', '0.1').
    factory('Image', function($resource, $http) {
        delete $http.defaults.headers.common['X-Requested-With'];

        return $resource('http://209.180.92.243\\:8080/apod/images/:days', {}, {
            query: {method:'GET', params: {days: '1'}, isArray: true}
        });
    });

