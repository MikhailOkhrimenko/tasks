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
    $scope.editTask = false;

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
        for (var i = 0; i < newVal.length; i++) {
            if (newVal[i].done) {
                $scope.doneTasks += 1;
            }
            lsService.updateItemById (newVal[i].id, newVal[i].done, "done");
        }
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
        //if ($scope.editTask) {
        //    for (var i = 0; i < newVal.length; i++) {
        //        if (newVal[i].id == $scope.editTaskId) {
        //            lsService.updateItemById(newVal[i].id, newVal[i].task, "task");
        //        }
        //    }
        //}
        //lsService.updateItemById(newVal);
    }, true);

    $scope.clearAll = function() {
        console.log("Удаление всех записей clearAll");

        $scope.items = [];
        lsService.setItem($scope.items);
    };

    $scope.removeItem = function(object) {
        console.log("Удаление одной записи removeItem");
        $scope.editTaskId = null;
        //var id = object.id;
        lsService.removeItemsById (object.id);
        $scope.items = lsService.getAllItems();
    };

    $scope.editItem = function(object) {
        console.log("Редактирование одной записи updateItem");
        $scope.editTask = true;
        $scope.editTaskId = object.id;
        $scope.oldTask = object.task;
    };

    $scope.applyEdit = function(object) {
        console.log('applyEdit');
        lsService.updateItemById(object.id, object.task, "task");
        $scope.editTask = false;
        $scope.editTaskId = null;
    };

    $scope.cancelEdit = function(object) {
        console.log('cancelEdit');
        object.task = $scope.oldTask;
        $scope.editTaskId = null;
        $scope.editTask = false;
    };
});
