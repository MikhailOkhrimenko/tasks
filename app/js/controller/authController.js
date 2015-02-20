/**
 * Created by Мишаня on 20.02.2015.
 */

authModule.controller("authController", function($scope, $state) {
    $scope.signIn = function() {
        $state.go("tasks");
    }
});