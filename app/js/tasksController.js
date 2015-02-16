/**
 * Created by Мишаня on 10.02.2015.
 */

tasksApp.controller("tasksController", function ($scope, lsService) {
    console.log("Инициализация контроллера");
    $scope.items = lsService.getAllItems();
    if (typeof($scope.items) == "undefined") {
        $scope.items = [];
    }
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;

    $scope.addItem = function (text) {
        console.log("Добавление записи addItem");
        if (!(text == null || text == "")) {
            lsService.addItems(text);
        } else {
            alert("Пусто");
        }
        $scope.text = "";
        $scope.items = lsService.getAllItems();
    };

    $scope.$watch(function($scope) {
        return $scope.items;
    }, function(newVal) {
        console.log("Watcher Items");
        $scope.allTasks = newVal.length;
        $scope.emptyItems = $scope.allTasks > 0 ? false : true;
        $scope.doneTasks = 0;
        for (i = 0; i < newVal.length; i++) {
            if (newVal[i].done) {
                $scope.doneTasks += 1;
                lsService.updateItemById (newVal[i].id, newVal[i].done);
            }
        };
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
    }, true);

    $scope.clearAll = function() {
        console.log("Удаление всех записей clearAll");
        $scope.items = [];
        lsService.setItem($scope.items);
    };

    $scope.removeItem = function(object) {
        console.log("Удаление одной записи removeItem");
        var id = object.id;
        lsService.removeItemsById (id);
        $scope.items = lsService.getAllItems();
    };

});
