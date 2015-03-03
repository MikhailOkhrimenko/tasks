/**
 * Created by Мишаня on 26.02.2015.
 */
define([
    'mainApp'
], function(app) {

        console.log('mainApp-languageController');
        app.controller('languageController', ['$scope', 'gettextCatalog', 'languageService', function ($scope, gettextCatalog, languageService) {
        console.log('languageController');
        $scope.language = ['en', 'ru'];
        var lang = languageService.getLanguage();
        if (lang) {
            $scope.lang = lang;
        } else {
            $scope.lang = 'en';
        }
        gettextCatalog.setCurrentLanguage($scope.lang);

        $scope.changeLanguage = function () {
            gettextCatalog.setCurrentLanguage($scope.lang);
            languageService.setLanguage($scope.lang);
        };
    }]);

});