/**
 * Created by Мишаня on 13.02.2015.
 */

var tasksApp;
tasksApp = angular.module("tasksApp", []);

tasksApp.service("crudLocalStorageService", function(){

    this.addItem = function (text) {
        console.log("Service.addItems");
        var id = parseInt(this.getAutoIncrementId()) + 1;
        var items = this.getAllItems();
        if (typeof(items) == "undefined") {
            items = [];
        }
        items.push({id: id, task: text, done: false});
        localStorage.setItem('autoIncrement', id);
        this.setItem(items);
    };

    this.getAllItems = function () {
        console.log("Service.getAllItems");
        if (localStorage.length > 0) {
            return JSON.parse(localStorage.getItem('itemsData'));
        }
    };

    this.getItemById = function (id) {
        var items = this.getAllItems();
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                return items[i];
            }
        }
    };

    this.updateItemById = function(id, value) {
        var items = this.getAllItems();
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i] = value;
            }
        }
        this.setItem(items);
    };

    this.removeItemById = function (id) {
        var items = this.getAllItems();
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items.splice(i, 1);
            }
        }
        this.setItem(items);
    };

    this.setItem = function(items) {
        localStorage.setItem('itemsData',JSON.stringify(items));
    };

    this.getAutoIncrementId = function () {
        var autoIncrementId;
        autoIncrementId = localStorage.getItem("autoIncrement");
        if (autoIncrementId == null || typeof(autoIncrementId) == "undefined") {
            autoIncrementId = 0;
        }
        return autoIncrementId;
    };

});