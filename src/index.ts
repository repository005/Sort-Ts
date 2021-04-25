import { Sorter } from './Sort';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';

const numberCollection = new NumberCollection([5, 3, -5, 10, 0, 115]);
const charactersCollection = new CharactersCollection('Xaays');

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(sorter.collection);
