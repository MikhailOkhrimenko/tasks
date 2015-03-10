/**
 * Created by Мишаня on 05.03.2015.
 */
define([
    'mainApp'
], function(app) {

    console.log('FakeBackend');

    app.constant('configFakeBackend', {
        AUTO_INCREMENT_KEY_ITEM: "autoIncrementItem",
        AUTO_INCREMENT_KEY_USER: "autoIncrementUser",
        ITEMS_DATA_KEY: "itemsData",
        USERS_DATA_KEY: "usersData",
        AUTH_USER_DATA_KEY: "authUser",
        LANGUAGE_APP: "language"
    });

    app.run(['$httpBackend', 'configFakeBackend', function ($httpBackend) {

        $httpBackend.
            whenGET(/.*/).
            passThrough();

        function getAllUsersData() {
            var allUsersData = JSON.parse(localStorage.getItem(config.USERS_DATA_KEY));
            if (allUsersData == null) {
                allUsersData = [];
            }
            return allUsersData;
        }

        //$httpBackend.
        //    whenGET('/getAuthUser').
        //    respond();
    }]);
});