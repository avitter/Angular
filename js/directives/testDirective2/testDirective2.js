//var directiveModule = angular.module('directiveModule', []);
testEventModule.directive('testDirective2', function($parse)
{
    var directiveDefinition =
    {
        scope:
        {
            fName: '=firstName',
            lName: '=lastName',
            doStuff: '&doSomething'
        },

        templateUrl: "js/directives/testDirective2/testDirective2Partial.html",

        link: function linkFn(scope, lElement, attrs)
        {
            scope.$watch('fName', function(value)
            {
                scope.fNameUpdate();
            });

            scope.$watch('lName', function(value)
            {
                scope.lNameUpdate();
            });
        },

        controller:
        ['$scope',
            function($scope)
            {
                $scope.fNameUpdateCount = 0;
                $scope.lNameUpdateCount = 0;

                $scope.fNameUpdate = function()
                {
                    $scope.fNameUpdateCount += 1;
                }

                $scope.lNameUpdate = function()
                {
                    $scope.lNameUpdateCount += 1;
                }

                $scope.btnClick = function()
                {
                    var totalCount =  $scope.fNameUpdateCount + $scope.lNameUpdateCount;
                    $scope.doStuff($scope.fNameUpdateCount);
                }
            }
        ]
    }

    return directiveDefinition;
});
