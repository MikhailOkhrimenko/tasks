/**
 * Created by Мишаня on 20.02.2015.
 */

define([
    'authModule'
], function(app) {

    console.log('authService');

    app.service("authService", ['$http', '$q', 'config', function ($http, $q, config) {

        function getAllUsersData() {
            var allUsersData = JSON.parse(localStorage.getItem(config.USERS_DATA_KEY));
            if (allUsersData == null) {
                allUsersData = [];
            }
            return allUsersData;
        }

        this.authUser = function (userData) {
            var allUsersData = getAllUsersData();
            var findUser = _.find(allUsersData, userData);
            if (!_.isUndefined(findUser)) {
                var authUser = _.omit(findUser, 'password');
                localStorage.setItem(config.AUTH_USER_DATA_KEY, JSON.stringify(authUser));
                return true;
            } else {
                return false;
            }
        };

        this.getAuthUser = function () {

            var authUserData = JSON.parse(localStorage.getItem(config.AUTH_USER_DATA_KEY));
            if (authUserData == null) {
                return false;
            }
            return authUserData;
        };

        this.signOut = function () {
            localStorage.removeItem(config.AUTH_USER_DATA_KEY);
            return true;
        };
    }]);

});