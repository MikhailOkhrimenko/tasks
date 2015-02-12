/**
 * Created by Мишаня on 10.02.2015.
 */
var tasksApp;
tasksApp = angular.module("tasksApp", []);

tasksApp.controller("tasksController", function ($scope) {
    $scope.items = [];
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;

    $scope.addItem = function (text) {
        if (!(text == null || text == "")) {
            $scope.items.push({task: text, done: false});
        } else {
            alert("Пусто");
        }
        $scope.text = "";
    };

    $scope.$watch('items', function(newVal) {
        $scope.allTasks = newVal.length;
    }, true);

    $scope.$watch(function($scope) {
        return $scope.items.
            map(function(obj) {
                return obj.done
            });
    }, function (newVal) {
        $scope.doneTasks = 0;
        angular.forEach(newVal, function(el) {
            if (el) {
                $scope.doneTasks += 1;
            }
        });
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
    }, true);

    $scope.clearAll = function() {
        $scope.items = [];
    };

    $scope.removeItem = function(object) {
        var index = $scope.items.indexOf(object);
        $scope.items.splice(index, 1);
    };
});