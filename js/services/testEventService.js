var testEventModule = angular.module('testEventModule', []);
testEventModule.factory('testEventService', function($rootScope) {
    var testEventService = {};

    testEventService.data = 'test';

    testEventService.prepForBroadcast = function(eventName, data) {
        this.data = data;
        this.broadcastItem(eventName);
    };

    testEventService.broadcastItem = function(eventName) {
        $rootScope.$broadcast(eventName);
    };

    return testEventService;
});
