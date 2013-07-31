function testCtrl1($scope, testEventService) {
    $scope.sourceMessage = 'Source';
    $scope.message = '';
    $scope.eventName = 'testEventService_event1';

    $scope.handleClick = function(msg)
    {
        testEventService.prepForBroadcast($scope.eventName, msg);

        if($scope.eventName === 'testEventService_event1')
        {
            $scope.eventName = 'testEventService_event2';
        }
        else
        {
            $scope.eventName = 'testEventService_event1';
        }
    };

    $scope.$on('testEventService_event1', function()
    {
        $scope.message = testEventService.data;
    });
}

testCtrl1.$inject = ['$scope', 'testEventService'];