/**
 * Created by Мишаня on 10.02.2015.
 */

tasksApp.controller("tasksController", function ($scope, lsService) {
    console.log("Инициализация контроллера");
    $scope.items = lsService.getLs();
    if (typeof($scope.items) == "undefined") {
        $scope.items = [];
    }
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;

    $scope.addItem = function (text) {
        console.log("Добавление записи addItem");
        $scope.id = new Date().getTime();
        if (!(text == null || text == "")) {
            $scope.items.push({id: $scope.id, task: text, done: false});
        } else {
            alert("Пусто");
        }
        $scope.text = "";
    };

    $scope.$watchCollection(function($scope) {
        return $scope.items;
    }, function(newVal) {
        console.log("Watcher Items");
        $scope.allTasks = newVal.length;
        $scope.emptyItems = $scope.allTasks > 0 ? false : true;
        lsService.addLs($scope.items);
        $scope.itemsLs = lsService.getLs();
    });

    $scope.$watch(function($scope) {
        return $scope.items.
            map(function(obj) {
                return obj.done
            });
    }, function (newVal) {
        console.log("Watcher items.done");
        $scope.doneTasks = 0;
        angular.forEach(newVal, function(el) {
            if (el) {
                $scope.doneTasks += 1;
            }
        });
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
    }, true);

    $scope.clearAll = function() {
        console.log("Удаление всех записей clearAll");
        $scope.items = [];
    };

    $scope.removeItem = function(object) {
        console.log("Удаление одной записи removeItem");
        var index = $scope.items.indexOf(object);
        $scope.items.splice(index, 1);
    };

});
