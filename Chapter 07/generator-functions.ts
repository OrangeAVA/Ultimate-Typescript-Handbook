/* +--------------------Generator Functions--------------------+ */

function* randomInt(): Generator<number, number> {
  while (true) {
    yield Math.round(Math.random() * 10);
  }
}

const randomIterator = randomInt();
// console.log(randomIterator.next().value).toString();

function* randomInt2(limit: number): Generator<number, string> {
  let currentLimit = limit;
  while (true) {
    if (--currentLimit >= 0) {
      yield Math.round(Math.random() * 10);
    } else {
      return 'Random numbers exhausted!';
    }
  }
}

const randomIterator2 = randomInt2(1);
// console.log(randomIterator2.next().value);
// console.log(randomIterator2.next().value); // Random numbers exhausted!
// console.log(randomIterator2.next().value); // undefined

function* randomInt3(limit: number): Generator<number, string, boolean> {
  let currentLimit = limit;
  const message = 'Random numbers exhausted!';
  while (true) {
    if (--currentLimit >= 0) {
      if (yield Math.round(Math.random() * 10)) {
        break;
      }
    } else {
      return message;
    }
  }
  return message;
}

const randomIterator3 = randomInt3(10);
console.log(randomIterator3.next().value);
console.log(randomIterator3.next().value);
console.log(randomIterator3.next(true).value);  // Random numbers exhausted!
console.log(randomIterator3.next().value); // undefined
