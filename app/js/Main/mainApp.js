/**
 * Created by Мишаня on 24.02.2015.
 */
define([
    'auth-include',
    'signUp-include',
    'tasks-include'
], function() {
    console.log('mainApp');
    var app = angular.module('mainApp', ["ui.router", "gettext", 'authModule', 'signUpModule', 'tasksModule', 'ngMockE2E']);

    app.constant('config', {
        AUTO_INCREMENT_KEY_ITEM: "autoIncrementItem",
        AUTO_INCREMENT_KEY_USER: "autoIncrementUser",
        ITEMS_DATA_KEY: "itemsData",
        USERS_DATA_KEY: "usersData",
        AUTH_USER_DATA_KEY: "authUser",
        LANGUAGE_APP: "language"
    });

    app.run(['$rootScope', '$state', '$urlRouter', 'authService', function ($rootScope, $state, $urlRouter, authService) {
        $rootScope.$state = $state;
        $rootScope.$on('$locationChangeSuccess', function (event) {
            event.preventDefault();
            var isAuthorized = authService.getAuthUser();
            if (isAuthorized) {
                $state.go("Tasks");
            } else {
                var currentState = $state.current.name;
                if (currentState == "SignUp" || currentState == "SignUp.Terms") {
                    $state.go(currentState);
                } else {
                    $state.go("Auth");
                }
            }
            $urlRouter.sync();
        });
        $rootScope.isDomReady = true;
    }]);

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state("Auth", {
                url: "/login",
                templateUrl: "app/views/Auth/login.html",
                controller: "authController"
            })
            .state("Tasks", {
                url: "/tasks",
                templateUrl: "app/views/Tasks/tasks.html",
                controller: "tasksController"
            })
            .state("SignUp", {
                url: "/signup",
                templateUrl: "app/views/signUp/signup.html",
                controller: "signUpController"
            })
            .state("SignUp.Terms", {
                url: "/terms",
                templateUrl: "app/views/signUp/terms.html",
                controller: "signUpController"
            })
    }]);

    return app;

});