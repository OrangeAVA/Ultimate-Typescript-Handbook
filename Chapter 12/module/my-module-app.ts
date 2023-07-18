import { str } from './str-module';
import reverse from './str-module';
import { Word } from './str-module';

str.lastChar('module'); // e

reverse('test'); // tset

const word = new Word();
const wordcount = word.count('Lorem ipsum'); // 2
