/**
 * Created by Мишаня on 13.02.2015.
 */

var tasksApp;
tasksApp = angular.module("tasksApp", []);

tasksApp.service("lsService", function(){

    this.addLs = function (items) {
        localStorage.setItem('itemsData',JSON.stringify(items));
    };

    this.getLs = function () {
        return JSON.parse(localStorage.getItem('itemsData'));
    };

});