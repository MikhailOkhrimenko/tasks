/**
 * Created by Мишаня on 20.02.2015.
 */
define([
    'signUpModule'
], function(app) {

    console.log('signUpService');

    app.service("signUpService", ['config', function (config) {

        function getAutoIncrementId() {
            var autoIncrementId;
            autoIncrementId = localStorage.getItem(config.AUTO_INCREMENT_KEY_USER);
            if (autoIncrementId == null || typeof(autoIncrementId) == "undefined") {
                autoIncrementId = "0";
            }
            return parseInt(autoIncrementId);
        }

        function setItem(userData) {
            localStorage.setItem(config.USERS_DATA_KEY, JSON.stringify(userData));
        }

        function getAllUsersData() {
            var allUsersData = JSON.parse(localStorage.getItem(config.USERS_DATA_KEY));
            if (allUsersData == null) {
                allUsersData = [];
            }
            return allUsersData;
        }

        this.setUser = function (userData) {
            var allUsersData = getAllUsersData();
            var id = getAutoIncrementId() + 1;
            var addUser = _.assign({"id": id}, userData);
            allUsersData.push(addUser);
            localStorage.setItem(config.AUTO_INCREMENT_KEY_USER, id);
            setItem(allUsersData);
        };

        this.uniqueUser = function (userData) {
            var allUsersData = getAllUsersData();
            return _.find(allUsersData, userData);
        };
    }]);

});