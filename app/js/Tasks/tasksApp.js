/**
 * Created by Мишаня on 13.02.2015.
 */

var tasksApp;
tasksApp = angular.module("tasksApp", ["ui.router", "authModule", "signUpModule"]);

tasksApp.constant( 'config', {
    AUTO_INCREMENT_KEY: "autoIncrement",
    ITEMS_DATA_KEY: "itemsData",
    USERS_DATA_KEY: "usersData"
});

tasksApp.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
}]);

tasksApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/login");

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