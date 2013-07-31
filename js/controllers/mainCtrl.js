function mainCtrl($scope) {
    $scope.doSomethingCount = 0;
    $scope.increment = 1;

    $scope.doSomething = function(increment)
    {
        $scope.doSomethingCount += increment;
    };
}

mainCtrl.$inject = ['$scope'];