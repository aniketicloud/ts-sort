import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10, -1, -4, 11]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

const charactersCollection = new CharactersCollection("Ciao");
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();

console.log(charactersCollection.data);
