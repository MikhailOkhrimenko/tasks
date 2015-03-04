/**
 * Created by Мишаня on 20.02.2015.
 */
define([
    'authModule'
], function(app) {

    console.log('authController');

    app.controller("authController", ['$scope', '$state', 'authService',
        function ($scope, $state, authService) {
            $scope.email = "";
            $scope.password = "";
            $scope.errAuth = false;

            $scope.signIn = function () {
                var userData = {"email": _.trim($scope.email), "password": $scope.password};
                var isAuthUser = authService.authUser(userData);
                $scope.email = "";
                $scope.password = "";
                if (isAuthUser) {
                    $scope.errAuth = false;
                    $state.go("Tasks");
                } else {
                    $scope.errAuth = true;
                }
            }
        }]);

});