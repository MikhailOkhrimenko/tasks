/**
 * Created by Мишаня on 10.02.2015.
 */


/*
* 1.избавится от     if (typeof($scope.items) == "undefined") { - сделал
 $scope.items = [];
 }
*
* 2. методы сервиса должны оперировать полными сущиностями  (addItem(text)) - сделал
*
* 3. ng-class - есть более короткий синтакиси - сделал
*
* 4. кнопка "добавить" должна быть некативной если данные невалидные - сделал
*
* 5. не все методы сервиса должны быть доступны снаружи - сделал
*
* 6. хотя бы для ключей локал стореджа нужно использовать константы - сделал
*
* 7. избавится от (localStorage.length > 0) -сделал
*
* 8. избавится от localStorageService.getAllItems() в обработчиках пользовательских методов - сделал
*
* 9.  $scope.addItem = function (text)  аргумент лишний - сделал
*
* 10. нет транслиту! -сделал
*
*
* ------------------------------------------
* 
* либа lodash, интергировать и применить где это возможно
*
* */

tasksApp.controller("tasksController", function ($scope, localStorageService) {
    console.log("Инициализация контроллера");
    $scope.items = localStorageService.getAllItems();
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;
    $scope.text = "";
    $scope.editTaskId = null;

    $scope.addItem = function () {
        console.log("Добавление записи addIttem");
        var item = {"task": $scope.text, "done": false};
        item = localStorageService.addItem(item);
        $scope.items.push(item);
        $scope.text = "";
    };

    $scope.$watch(function($scope) {
        return $scope.items;
    }, function(newVal, oldVal) {
        console.log("Watcher Items");
        $scope.allTasks = newVal.length;
        $scope.doneTasks = 0;
        for (var i = 0; i < newVal.length; i++) {
            if (newVal[i].done) {
                $scope.doneTasks += 1;
            }
            try {
                if (newVal[i].done != oldVal[i].done) {
                    localStorageService.updateItemById(newVal[i].id, newVal[i]);
                }
            }
            catch (e) {}
        }
        $scope.notDoneTasks = $scope.allTasks - $scope.doneTasks;
    }, true);

    $scope.clearAll = function() {
        console.log("Удаление всех записей clearAll");
        localStorageService.removeAllItems();
        $scope.items = [];
    };

    $scope.clearAllDone = function() {
        console.log("Удаление всех выполненных записей clearAll");
        localStorageService.removeAllDoneItems();
        _.remove($scope.items, "done", true);
    };

    $scope.removeItem = function(item) {
        console.log("Удаление одной записи removeItem");
        var id = item.id;
        localStorageService.removeItemById(id);
        //_.remove($scope.items, function (object) {
        //    return object.id == id;
        //});
        _.remove($scope.items, "id", id);
    };

    $scope.editItem = function(item) {
        console.log("Редактирование одной записи editItem");
        $scope.editTaskId = item.id;
    };

    $scope.applyEdit = function(item) {
        console.log('applyEdit');
        localStorageService.updateItemById(item.id, item);
        $scope.editTaskId = null;
    };

    $scope.cancelEdit = function() {
        console.log('cancelEdit');
        var item = localStorageService.getItemById($scope.editTaskId);
        $scope.items = _.map($scope.items, function (object) {
            if (object.id == $scope.editTaskId) {
                object = item;
            }
            return object;
        });
        $scope.editTaskId = null;
    };
});
