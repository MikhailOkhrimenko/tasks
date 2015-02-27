/**
 * Created by Мишаня on 10.02.2015.
 */

tasksModule.controller("tasksController", ['$scope', 'localStorageService', 'authService', '$state',
  function ($scope, localStorageService, authService, $state) {
    console.log("Инициализация контроллера");
    $scope.authUserData = authService.getAuthUser();
    $scope.items = localStorageService.getAllItems($scope.authUserData.id);
    $scope.allTasks = $scope.doneTasks = $scope.notDoneTasks = 0;
    $scope.text = "";
    $scope.editTaskId = null;

    $scope.addItem = function () {
        console.log("Добавление записи addIttem");
        var item = {"task": $scope.text, "done": false, "user": $scope.authUserData.id};
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
        localStorageService.removeAllItems($scope.authUserData.id);
        $scope.items = [];
    };

    $scope.clearAllDone = function() {
        console.log("Удаление всех выполненных записей clearAll");
        localStorageService.removeAllDoneItems($scope.authUserData.id);
        _.remove($scope.items, "done", true);
    };

    $scope.removeItem = function(item) {
        console.log("Удаление одной записи removeItem");
        var id = item.id;
        localStorageService.removeItemById(id);
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

    $scope.signOut = function() {
        authService.signOut();
        $state.go("Auth");
    };
}]);
