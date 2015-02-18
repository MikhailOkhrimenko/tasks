/**
 * Created by Мишаня on 17.02.2015.
 */

tasksApp.service("localStorageService", function(){

    var autoIncrementKey = "autoIncrement";
    var itemsDataKey = "itemsData";

    function getAutoIncrementId () {
        var autoIncrementId;
        autoIncrementId = localStorage.getItem(autoIncrementKey);
        if (autoIncrementId == null || typeof(autoIncrementId) == "undefined") {
            autoIncrementId = "0";
        }
        return parseInt(autoIncrementId);
    }

    function setItem (object) {
        localStorage.setItem(itemsDataKey, JSON.stringify(object));
    }

    this.addItem = function (item, object) {
        console.log("Service.addItems");
        var id = getAutoIncrementId() + 1;
        var addItem = _.assign({"id": id}, item);
        object.push(addItem);
        localStorage.setItem(autoIncrementKey, id);
        setItem(object);
        return object;
    };

    this.getAllItems = function () {
        console.log("Service.getAllItems");
        var items = JSON.parse(localStorage.getItem(itemsDataKey));
        if (items == null) {
            items = [];
        }
        return items;
    };

    //this.getItemById = function (id) {
    //    console.log("Service.getItemById");
    //    var items = this.getAllItems();
    //    for (var i = 0; i < items.length; i++) {
    //        if (items[i].id == id) {
    //            return items[i];
    //        }
    //    }
    //};

    this.updateItemById = function(id, value) {
        console.log("Service.updateItemById");
        var items = this.getAllItems();
        for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i] = value;
            }
        }
        setItem(items);
    };

    this.removeItemById = function (id, object) {
        console.log("Service.removeItemById");
        _.remove(object, function (object) {
            return object.id == id;
        });
        setItem(object);
        return object;
    };

    this.removeAllItems = function (object) {
        console.log("Service.removeAllItems");
        object = [];
        setItem(object);
        return object;
    };

});