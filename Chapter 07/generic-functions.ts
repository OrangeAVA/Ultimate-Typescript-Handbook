function echo<T>(input: T): T {
  return input;
}

// let oops: string = echo(123);
let strTest: string = echo('Test'); // Test
let numTest = echo<number>(123); // 123

interface Item {
  save: (arg0: any[]) => void;
  contents: any[];
  [key: string]: any;
}

function save<T extends Item>(item: T): boolean | unknown {
  try {
    item.save(item.contents);
    return true;
  } catch(err) {
    throw new Error('Save failed');
  }
}

const basket: Item = {
  save: () => {
    // save wherever...
  },
  contents: [],
}
save(basket); // fine
// save('oops'); // Error
