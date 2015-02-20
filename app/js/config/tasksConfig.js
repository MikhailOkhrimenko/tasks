/**
 * Created by Мишаня on 20.02.2015.
 */

tasksApp.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("auth", {
            url: "/login",
            templateUrl: "app/templates/auth/login.html",
            controller: "authController"
        })
        .state("tasks", {
            url: "/tasks",
            templateUrl: "app/templates/tasks/tasks.html",
            controller: "tasksController"
        })
        .state("signUp", {
            url: "/signup",
            templateUrl: "app/templates/auth/signup.html",
            controller: "signUpController"
        })
});
