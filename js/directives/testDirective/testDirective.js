//var directiveModule = angular.module('directiveModule', []);
testEventModule.directive('testDirective', function($parse)
{
    var directiveDefinition =
    {
        link: function linkFn(scope, lElement, attrs)
        {
            scope.$watch(attrs.lastName, function(value)
            {
                if(value)
                {
                    lElement.text('Last Name: ' + value + '!');
                }
                else
                {
                    lElement.text('Last name:');
                }
            });

            lElement.bind('click', function()
            {
                scope.$apply( function()
                {
                    // Write to Scope
                    // Look into this, don't fully understand
                    $parse(attrs.lastName).assign(scope, 'Vitter');
                    $parse(attrs.firstName).assign(scope, 'Al');
                });
            });
        }
    }

    return directiveDefinition;
});
