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

    this.addItem = function (item) {
        console.log("Service.addItems");
        var id = getAutoIncrementId() + 1;
        var items = this.getAllItems();
        var addItem = _.assign({"id": id}, item);
        items.push(addItem);
        localStorage.setItem(autoIncrementKey, id);
        setItem(items);
        return items;
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
        var newItems = _.map(items, function (object) {
            if (object.id == id) {
                object = value;
            }
            return object;
        });
        setItem(newItems);
    };

    this.removeItemById = function (id) {
        console.log("Service.removeItemById");
        var items = this.getAllItems();
        _.remove(items, function (object) {
            return object.id == id;
        });
        setItem(items);
        return items;
    };

    this.removeAllItems = function () {
        console.log("Service.removeAllItems");
        var items = [];
        setItem(items);
        return items;
    };

});