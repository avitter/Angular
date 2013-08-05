var testEventModule = angular.module('testEventModule', []);

function mainCtrl($scope) {
    $scope.letterCount = 0;
    $scope.numLetter = 0;

    $scope.updateCount = function(totalCount)
    {
        $scope.letterCount = totalCount;
    };
}

mainCtrl.$inject = ['$scope'];