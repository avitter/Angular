//var directiveModule = angular.module('directiveModule', []);
testEventModule.directive('testDirective2', function()
{
    var directiveDefinition =
    {
        scope:
        {
            fName: '=firstName',
            lName: '=lastName',
            countUpdated: '&onNameUpdate'
        },

        templateUrl: 'js/directives/testDirective2/testDirective2Partial.html',

        //template: '<div>Component First Name: {{ fName }} <BR><button type="button" ng-click="btnClick()">Reset</button> </div>',

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
                $scope.totalCount = $scope.fNameUpdateCount + $scope.lNameUpdateCount;

                $scope.fNameUpdate = function()
                {
                    if($scope.fName)
                    {
                        $scope.fNameUpdateCount = $scope.fName.length;
                        $scope.totalCount = $scope.fNameUpdateCount + $scope.lNameUpdateCount;

                        $scope.countUpdated({totalCount: $scope.totalCount});
                    }
                }

                $scope.lNameUpdate = function()
                {
                    if($scope.lName)
                    {
                        $scope.lNameUpdateCount = $scope.lName.length;
                        $scope.totalCount = $scope.fNameUpdateCount + $scope.lNameUpdateCount;

                        $scope.countUpdated({totalCount: $scope.totalCount});
                    }
                }

                $scope.btnClick = function()
                {
                    $scope.fName = '';
                    $scope.lName = '';
                    //var totalCount =  $scope.fNameUpdateCount + $scope.lNameUpdateCount;
                    //$scope.countUpdated({totalCount: $scope.totalCount});
                }
            }
        ]
    };

    return directiveDefinition;
});
