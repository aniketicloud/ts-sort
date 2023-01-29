import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, -1, -4, 11]);
numbersCollection.sort();
console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("Ciao");
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();

// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(20);
// linkedList.add(-2);
// linkedList.add(0);
// linkedList.add(30);
// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
// linkedList.print();
