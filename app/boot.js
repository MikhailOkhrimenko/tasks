/**
 * Created by Мишаня on 02.03.2015.
 */
requirejs.config({
    baseUrl: '/app',
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'lodash': '../bower_components/lodash/lodash',
        'angular': '../bower_components/angularjs/angular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-gettext': '../bower_components/angular-gettext/dist/angular-gettext',
        'domReady': '../bower_components/domReady/domReady',

        'mainApp': './js/Main/mainApp',
        'fakeBackend': './js/Main/fakeBackend',
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
        'tasks-include': './js/Tasks/tasks-include',
        'bootstrap': './bootstrap'
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
        },
        'angular-mocks': {
            deps: ['angular']
        }
    }
});

require(['bootstrap'], function() {});