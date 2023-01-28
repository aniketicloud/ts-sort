"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LNode = /** @class */ (function () {
    function LNode(data) {
        this.data = data;
        this.next = null;
    }
    return LNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var lNode = new LNode(data);
        if (!this.head) {
            this.head = lNode;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = lNode;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var lNode = this.head;
            while (lNode.next) {
                lNode = lNode.next;
                length++;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of bounds!");
        }
        var counter = 0;
        var lNode = this.head;
        while (lNode) {
            if (counter === index) {
                return lNode;
            }
            counter++;
            lNode = lNode.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftLode = this.at(leftIndex);
        var rightLode = this.at(rightIndex);
        var leftIndexValue = leftLode.data;
        leftLode.data = rightLode.data;
        rightLode.data = leftIndexValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
