/**
 * Created by Мишаня on 20.02.2015.
 */

signUpModule.controller("signUpController", ['$scope', '$state', 'signUpService', function($scope, $state, signUpService) {
    $scope.name = "";
    $scope.lastname = "";
    $scope.email = "";
    $scope.birthday = "";
    $scope.password = "";
    $scope.confirmPassword = "";
    $scope.isTerms = false;
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.format = 'dd.MM.yyyy';

    $scope.$watch( function() { return $scope.email; },
        function (value) {
            var email = {email: value};
            if (signUpService.uniqueUser(email)) {
                $scope.notUniqueEmail = true;
            } else {
                $scope.notUniqueEmail = false;
            }
        }, true);

    $scope.$watch(function() { return $scope.confirmPassword; },
        function (value) {
            if ($scope.password !== value) {
                $scope.confirmPasswordInvalid = true;
            } else {
                $scope.confirmPasswordInvalid = false;
            }
        }, true);

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.signUp = function() {
        var userData = {
            "name": _.trim($scope.name),
            "lastname": _.trim($scope.lastname),
            "birthday": $scope.birthday,
            "email": _.trim($scope.email),
            "password": $scope.password
        };
        signUpService.setUser(userData);
        $state.go("Auth");
    };

    $scope.terms = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if ($state.is("SignUp.Terms")) {
            $state.go("SignUp");
        } else {
            $state.go("SignUp.Terms");
        }
    };

}]);