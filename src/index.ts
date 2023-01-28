import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, -1, -4, 11]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection);