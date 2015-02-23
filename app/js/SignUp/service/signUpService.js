/**
 * Created by Мишаня on 20.02.2015.
 */

signUpModule.service("signUpService", function(config){

    function setItem (userData) {
        localStorage.setItem(config.USERS_DATA_KEY, JSON.stringify(userData));
    }

    function getAllUsersData () {
        var allUsersData = JSON.parse(localStorage.getItem(config.USERS_DATA_KEY));
        if (allUsersData == null) {
            allUsersData = [];
        }
        return allUsersData;
    }

    this.setUser = function(userData) {
        var allUsersData = getAllUsersData();
        allUsersData.push(userData);
        setItem(allUsersData);
    };

    this.uniqueUser = function(userData) {
        var allUsersData = getAllUsersData();
        return _.find(allUsersData, userData)
    };
});