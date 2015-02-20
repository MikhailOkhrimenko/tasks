/**
 * Created by Мишаня on 20.02.2015.
 */

signUpModule.controller("signUpController", ['$scope', '$state', 'signUpService', function($scope, $state, signUpService) {
    $scope.email = "";
    $scope.password = "";

    $scope.signUp = function() {
        var userData = {"email": _.trim($scope.email), "password": $scope.password};
        signUpService.setUser(userData);
        $scope.email = "";
        $scope.password = "";
        $state.go("Auth");
    }
}]);