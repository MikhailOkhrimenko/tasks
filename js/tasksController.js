/**
 * Created by Мишаня on 10.02.2015.
 */
var tasksApp;
tasksApp = angular.module("tasksApp");
var model;
model = {
    items: []
};
tasksApp.controller("tasksController", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text) {
        if (!(text == null || text == "")) {
            $scope.list.items.push({task: text, done: false});
        } else {
            alert("Пусто");
        }
    }
});
