/**
 * Created by Мишаня on 13.02.2015.
 */

var tasksApp;
tasksApp = angular.module("tasksApp", []);

tasksApp.service("lsService", function(){

    this.addLs = function (items) {
        console.log("Service.addLs");
        localStorage.setItem('itemsData',JSON.stringify(items));
    };

    this.getLs = function () {
        console.log("Service.getLs");
        if (localStorage.length > 0) {
            return JSON.parse(localStorage.getItem('itemsData'));
        }
    };

});