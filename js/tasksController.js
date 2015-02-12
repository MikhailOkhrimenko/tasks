/**
 * Created by Мишаня on 10.02.2015.
 */
var tasksApp;
tasksApp = angular.module("tasksApp", []);

tasksApp.controller("tasksController", function ($scope) {
    $scope.items = [];
    $scope.text;
    $scope.all_tasks = $scope.done_tasks = $scope.not_done_tasks = 0;
    $scope.addItem = function (text) {
        if (!(text == null || text == "")) {
            $scope.items.push({task: text, done: false});
        } else {
            alert("Пусто");
        }
        $scope.text = "";
        $scope.all_tasks = $scope.items.length;
        angular.forEach($scope.items, function(el) {
            if (el.done) {
                $scope.done_tasks += el.done ? 1 : 0;
            }
        })
        $scope.not_done_tasks = $scope.all_tasks - $scope.done_tasks;
    }
});
