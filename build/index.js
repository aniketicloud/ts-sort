"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftNum = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftNum;
                }
            }
        }
    };
    return Sorter;
}());
var x = new Sorter([10, -1, -4, 11]);
x.sort();
console.log(x.collection);
