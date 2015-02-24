/**
 * Created by Мишаня on 17.02.2015.
 */

tasksModule.service("localStorageService", function(config){

    function getAutoIncrementId () {
        var autoIncrementId;
        autoIncrementId = localStorage.getItem(config.AUTO_INCREMENT_KEY);
        if (autoIncrementId == null || typeof(autoIncrementId) == "undefined") {
            autoIncrementId = "0";
        }
        return parseInt(autoIncrementId);
    }

    function setItem (items) {
        localStorage.setItem(config.ITEMS_DATA_KEY, JSON.stringify(items));
    }

    this.addItem = function (item) {
        console.log("Service.addItems");
        var id = getAutoIncrementId() + 1;
        var items = this.getAllItems();
        var addItem = _.assign({"id": id}, item);
        items.push(addItem);
        localStorage.setItem(config.AUTO_INCREMENT_KEY, id);
        setItem(items);
        return addItem;
    };

    this.getAllItems = function () {
        console.log("Service.getAllItems");
        var items = JSON.parse(localStorage.getItem(config.ITEMS_DATA_KEY));
        if (items == null) {
            items = [];
        }
        return items;
    };

    this.getItemById = function (id) {
        console.log("Service.getItemById");
        var items = this.getAllItems();
        //return _.find(items, function (object) {
        //    return object.id == id;
        //});
        return _.find(items, "id", id);
    };

    this.updateItemById = function(id, item) {
        console.log("Service.updateItemById");
        var items = this.getAllItems();
        items = _.map(items, function (object) {
            if (object.id == id) {
                object = item;
            }
            return object;
        });
        setItem(items);
    };

    this.removeItemById = function (id) {
        console.log("Service.removeItemById");
        var items = this.getAllItems();
        //_.remove(items, function (object) {
        //    return object.id == id;
        //});
        _.remove(items, "id", id);
        setItem(items);
    };

    this.removeAllItems = function () {
        console.log("Service.removeAllItems");
        var items = [];
        setItem(items);
    };

    this.removeAllDoneItems = function () {
        console.log("Service.removeAllDoneItems");
        var items = this.getAllItems();
        _.remove(items, "done", true);
        setItem(items);
    };

});