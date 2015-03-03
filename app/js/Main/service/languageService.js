/**
 * Created by Мишаня on 26.02.2015.
 */
define([
    'mainApp'
], function(app) {

        console.log('mainApp-languageService');

        app.service('languageService', ['config', function (config) {
        console.log('languageService');
        this.setLanguage = function (lang) {
            localStorage.setItem(config.LANGUAGE_APP, lang);
        };

        this.getLanguage = function () {
            var lang = localStorage.getItem(config.LANGUAGE_APP);
            if (lang) {
                return lang;
            } else {
                return false;
            }
        };
    }]);

});