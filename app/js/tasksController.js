/**
 * Created by Мишаня on 10.02.2015.
 */

tasksApp.controller("tasksController", function ($scope, crudLocalStorageService) {
    console.log("Инициализация контроллера");
    $scope.items = crudLocalStorageService.getAllItems();
    if (typeof($scope.items) == "undefined") {
        $scope.items = [];
    }
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;
    $scope.modeEditTask = false;

    $scope.addItem = function (text) {
        console.log("Добавление записи addItem");
        if (!(text == null || text == "")) {
            crudLocalStorageService.addItem(text);
        } else {
            alert("Пусто");
        }
        $scope.text = "";
        $scope.items = crudLocalStorageService.getAllItems();
    };

    $scope.$watch(function($scope) {
        return $scope.items;
    }, function(newVal, oldVal) {
        console.log("Watcher Items");
        $scope.allTasks = newVal.length;
        $scope.emptyItems = $scope.allTasks > 0 ? false : true;
        $scope.doneTasks = 0;
        for (var i = 0; i < newVal.length; i++) {
            if (newVal[i].done) {
                $scope.doneTasks += 1;
            }
            try {
                if (newVal[i].done != oldVal[i].done) {
                    $scope.editTaskId = null;
                    crudLocalStorageService.updateItemById(newVal[i].id, newVal[i]);
                }
            }
            catch (e) {}
        }
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
    }, true);

    $scope.clearAll = function() {
        console.log("Удаление всех записей clearAll");
        $scope.items = [];
        crudLocalStorageService.setItem($scope.items);
    };

    $scope.removeItem = function(object) {
        console.log("Удаление одной записи removeItem");
        $scope.editTaskId = null;
        crudLocalStorageService.removeItemById (object.id);
        $scope.items = crudLocalStorageService.getAllItems();
    };

    $scope.editItem = function(object) {
        console.log("Редактирование одной записи editItem");
        $scope.editTaskId = object.id;
        $scope.items = crudLocalStorageService.getAllItems();
    };

    $scope.applyEdit = function(object) {
        console.log('applyEdit');
        crudLocalStorageService.updateItemById(object.id, object);
        $scope.editTaskId = null;
    };

    $scope.cancelEdit = function() {
        console.log('cancelEdit');
        $scope.editTaskId = null;
        $scope.items = crudLocalStorageService.getAllItems();
    };
});
