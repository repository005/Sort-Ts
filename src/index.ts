import { Sorter } from './Sort';
import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumberCollection([10,2,-1,4]);
// numberCollection.sort();
// console.log(numberCollection.data);

// const сharactersCollection = new CharactersCollection('XaaiOl');
// сharactersCollection.sort();
// console.log(сharactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
