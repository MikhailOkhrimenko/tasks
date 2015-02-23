/**
 * Created by Мишаня on 20.02.2015.
 */

signUpModule.controller("signUpController", ['$scope', '$state', 'signUpService', function($scope, $state, signUpService) {
    $scope.name = "";
    $scope.lastname = "";
    $scope.email = "";
    $scope.password = "";
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };
    $scope.format = 'dd.MM.yyyy';

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    $scope.signUp = function() {
        var userData = {
            "user": _.trim($scope.name),
            "lastname": _.trim($scope.lastname),
            "birthday": $scope.birthday,
            "email": _.trim($scope.email),
            "password": $scope.password
        };
        signUpService.setUser(userData);
        $scope.email = "";
        $scope.password = "";
        $state.go("Auth");
    };

    $scope.nameValidator = function() {
        $scope.nameInvalid = false;
        if ($scope.signupform.name.$dirty && $scope.signupform.name.$invalid) {
            return $scope.nameInvalid = true;
        }
    };

    $scope.lastnameValidator = function() {
        $scope.lastnameInvalid = false;
        if ($scope.signupform.lastname.$dirty && $scope.signupform.lastname.$invalid) {
            return $scope.lastnameInvalid = true;
        }
    };

    $scope.emailValidator = function() {
        $scope.emailInvalid = false;
        $scope.notUniqueUser = false;
        if ($scope.signupform.email.$dirty && $scope.signupform.email.$invalid) {
            $scope.emailInvalid = true;
        }
        if (!$scope.emailInvalid) {
            var email = {email: $scope.email};
            if (signUpService.uniqueUser(email)) {
                $scope.notUniqueUser = true;
            }
        }
    };

    $scope.passwordValidator = function() {
        $scope.passwordInvalid = false;
        if ($scope.signupform.password.$dirty && $scope.signupform.password.$invalid) {
            return $scope.passwordInvalid = true;
        }
    };

    $scope.confirmPasswordValidator = function() {
        $scope.confirmPasswordInvalid = false;
        if ($scope.password !== $scope.confirmPassword) {
            return $scope.confirmPasswordInvalid = true;
        }
    };


}]);