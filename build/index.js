"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, -1, -4, 11]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection("Ciao");
// charactersCollection.sort();
// console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(20);
linkedList.add(-2);
linkedList.add(0);
linkedList.add(30);
linkedList.sort();
linkedList.print();
