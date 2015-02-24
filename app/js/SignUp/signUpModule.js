/**
 * Created by Мишаня on 19.02.2015.
 */

var signUpModule;
signUpModule = angular.module("signUpModule", ['ui.bootstrap']);

signUpModule.directive('emailUnique', ['signUpService', function($service) {
    return {
        link: function(scope) {
                scope.$watch( function() { return scope.email; },
                    function (value) {
                        var email = {email: value};
                        if ($service.uniqueUser(email)) {
                            scope.notUniqueEmail = true;
                        } else {
                            scope.notUniqueEmail = false;
                        }
                });
        }
    }
}]);

signUpModule.directive('confirmPassword', function() {
    return {
        link: function (scope) {
            scope.$watch(function() { return scope.confirmPassword; }, function (value) {
                if (scope.password !== value) {
                    scope.confirmPasswordInvalid = true;
                } else {
                    scope.confirmPasswordInvalid = false;
                }
            })
        }
    }
});

