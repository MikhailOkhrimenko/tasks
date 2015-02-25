/**
 * Created by Мишаня on 20.02.2015.
 */

authModule.controller("authController", ['$scope', '$state', 'authService',
    function($scope, $state, authService) {
        $scope.email = "";
        $scope.password = "";
        $scope.errAuth = "";

        $scope.signIn = function() {
            var userData = {"email": _.trim($scope.email), "password": $scope.password};
            var isAuthUser = authService.authUser(userData);
            $scope.email = "";
            $scope.password = "";
            if (isAuthUser) {
                $scope.errAuth = "";
                $state.go("Tasks");
            } else {
                $scope.errAuth = "Не верный логин или пароль";
            }
        }
    }]);