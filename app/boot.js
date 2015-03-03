/**
 * Created by Мишаня on 02.03.2015.
 */
requirejs.config({
    baseUrl: '/app',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'lodash': '../bower_components/lodash/lodash.min',
        'angular': '../bower_components/angularjs/angular.min',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-gettext': '../bower_components/angular-gettext/dist/angular-gettext.min',

        'mainApp': './js/Main/mainApp',
        'languageController': './js/Main/controller/languageController',
        'languageService': './js/Main/service/languageService',
        'translation': './js/Main/translation/translations',
        'authModule': './js/Auth/authModule',
        'authService': './js/Auth/service/authService',
        'authController': './js/Auth/controller/authController',
        'signUpModule': './js/SignUp/signUpModule',
        'signUpController': './js/SignUp/controller/signUpController',
        'signUpService': './js/SignUp/service/signUpService',
        'tasksModule': './js/Tasks/tasksModule',
        'tasksController': './js/Tasks/controller/tasksController',
        'tasksService': './js/Tasks/service/tasksService',
        'mainApp-include': './js/Main/mainApp-include',
        'auth-include': './js/Auth/auth-include',
        'signUp-include': './js/SignUp/signUp-include',
        'tasks-include': './js/Tasks/tasks-include'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'ui-bootstrap': {
            deps: ['angular']
        },
        'angular-gettext': {
            deps: ['angular']
        }
    }
});

require(['mainApp-include']);