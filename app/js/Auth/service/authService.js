/**
 * Created by Мишаня on 20.02.2015.
 */

authModule.service("authService", function(config){

    function getAllUsersData () {
        var allUsersData = JSON.parse(localStorage.getItem(config.USERS_DATA_KEY));
        if (allUsersData == null) {
            allUsersData = [];
        }
        return allUsersData;
    }

    this.authUser = function(userData) {
        var allUsersData = getAllUsersData();
        var findUser = _.find(allUsersData, userData);
        if (!_.isUndefined(findUser)) {
            return findUser;
        } else {
            return "";
        }
    };
});