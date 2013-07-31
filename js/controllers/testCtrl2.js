function testCtrl2($scope, testEventService)
{
    $scope.message = '';
    $scope.$on('testEventService_event2', function()
    {
        $scope.message = testEventService.data;
    });
}

testCtrl2.$inject = ['$scope', 'testEventService'];
