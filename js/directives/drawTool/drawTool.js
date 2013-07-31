//var directiveModule = angular.module('directiveModule', []);
testEventModule.directive('testDirectives', function($parse)
{
    var directiveDefinition =
    {
            /*
        scope:
        {
            lastName: '=',
            firstName: '='
        },
            */
        templateUrl: "js/directives/testDirective2/drawToolPartial.html",
        link: function linkFn(scope, lElement, attrs)
        {
            scope.fName = 'Al';

            // Update Component Scope
            scope.$watch(attrs.firstName, function(value)
            {
                scope.fName = value;
            });

            // Update Parent Scope
            scope.$watch('fName', function ()
            {
                  scope.firstName = scope.fName;
            });
        }
    }

    return directiveDefinition;
});
