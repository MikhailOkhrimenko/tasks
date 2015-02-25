/**
 * Created by Мишаня on 24.02.2015.
 */

var app;
app = angular.module("mainApp", ["ui.router", "tasksModule", "authModule", "signUpModule"]);

app.constant( 'config', {
    AUTO_INCREMENT_KEY_ITEM: "autoIncrementItem",
    AUTO_INCREMENT_KEY_USER: "autoIncrementUser",
    ITEMS_DATA_KEY: "itemsData",
    USERS_DATA_KEY: "usersData",
    AUTH_USER_DATA_KEY: "authUser"
});

app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
}]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider
        .when('/tasks', ['$state', 'authService', function($state, authService) {
            if (authService.getAuthUser()) {
                $state.go("Tasks");
            } else {
                $state.go("Auth");
            }
        }])
        .otherwise("/login");

    $stateProvider
        .state("Auth", {
            url: "/login",
            templateUrl: "app/views/auth/login.html",
            controller: "authController"
        })
        .state("Tasks", {
            url: "/tasks",
            templateUrl: "app/views/tasks/tasks.html",
            controller: "tasksController"
        })
        .state("SignUp", {
            url: "/signup",
            templateUrl: "app/views/signUp/signup.html",
            controller: "signUpController"
        })
}]);