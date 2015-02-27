/**
 * Created by Мишаня on 26.02.2015.
 */
app.service('languageService', ['config', function(config) {
    this.setLanguage = function(lang) {
        localStorage.setItem(config.LANGUAGE_APP, lang);
    };

    this.getLanguage = function() {
        var lang = localStorage.getItem(config.LANGUAGE_APP);
        if (lang) {
            return lang;
        } else {
            return false;
        }
    };
}]);