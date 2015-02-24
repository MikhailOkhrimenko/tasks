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
            "name": _.trim($scope.name),
            "lastname": _.trim($scope.lastname),
            "birthday": $scope.birthday,
            "email": _.trim($scope.email),
            "password": $scope.password
        };
        signUpService.setUser(userData);
        $state.go("Auth");
    };

}]);