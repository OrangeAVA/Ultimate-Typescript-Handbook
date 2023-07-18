/* +--------------------Functions--------------------+ */
// function sayHello(name: string): string {
//   return `Hello ${name}`;
// }

// sayHello(123); // error
// sayHello(); // error
// const myNumber: number = sayHello('oops'); // error
// sayHello('Dan'); // fine

/* +--------------------Arrow Functions--------------------+ */

// const sayGoodbye = (name: string): string => {
//   // other lines
//   return `Bye ${name}`;
// };
// sayGoodbye('Dan');

// const aStr = 'string';
// aStr.split('').forEach(char => char.padStart(2, 'X'));

/* +--------------------Optional Parameters--------------------+ */

// function optional(maybe?: string) {
//   if (!maybe) return;
//   // maybe is definitely a string now
//   return maybe.length;
// }

// optional('anyString'); // fine
// optional(); // also fine

/* +--------------------Rest Parameters--------------------+ */

// function variadic(a: string, ...extra: string[]) {
//   // do something with strings
// }

// variadic('just one string'); // fine
// variadic('one string', 'and', 'any', 'others'); // also fine

// function variadic(a: string, ...extra: Array<string>) {
//   // do something with strings
// }

/* +--------------------Rest Arguments--------------------+ */

// function variadic(a: string, ...extra: string[]): string {
//   return a.concat(...extra);
// }

// function variadic(a: string, ...extra: string[]): string {
//   return a.concat(extra[0], extra[1]);
// }

/* +--------------------Destructured Parameters--------------------+ */

//let [height, weight, age] = [180, 70, 44];
//let { height, weight, age } = { height: 180, weight: 70, age: 44 };

// function showlocation({ lat, lng }: { lat: string, lng: string }): void {
//   window.open(`https://www.openstreetmap.org/#map=16/${lat}/${lng}`);
// }
// showlocation({ lat: '50.9272', lng: '-1.4015' });

// type location = {
//   zoom: string;
//   lat: string;
//   lng: string
// }
// function showLocation2({ zoom, lat, lng }: location): void {
//   window.open(`https://www.openstreetmap.org/#map=${zoom}/${lat}/${lng}`)
// }

// let [height, weight, age] = [180, 70,,];

/* +--------------------Void Functions--------------------+ */

// function sideEffect(): void {
//   // return 'oops'; // error
// }

/* +--------------------Function Type Expressions--------------------+ */

// let numberFn: (...nums: number[]) => number;
// numberFn = (...nums: number[]): number => {
//   return nums.reduce((prev: number, curr: number) => prev + curr, 0);
// }
// numberFn(1, 2, 3); // 6

// numberFn = (...nums: number[]): number => {
//   return nums.reduce((prev: number, curr: number) => {
//     if (!prev) return curr;
//     return prev * curr;
//   });
// }
// numberFn(4, 5, 6); // 120

// type numberFn2 = (...nums: number[]) => number;
// const addAllTheNums: numberFn2 = (...numbers: number[]) => {
//   return numbers.reduce((prev, next) => prev + next, 0);
// }

/* +--------------------Call Signatures--------------------+ */

// type numberFn3 = {
//   operation: string;
//   (...nums: number[]): number;
// }

// const myNumberFn3 = ((...nums: number[]): number => {
//   return nums.reduce((prev: number, curr: number) => prev + curr, 0);
// }) as numberFn3;
// myNumberFn3.operation = 'Sum';
// myNumberFn3.oops = 'error!';

/* +--------------------Function Type Interfaces--------------------+ */

// interface logFn {
//   (arg0: string): void;
// }

// let myLogFn: logFn = (str: string) => console.log(str);

/* +--------------------This Parameter--------------------+ */

// interface user {
//   name: string;
//   new (name: string): user;
// }

// function User(this: user, name: string): user {
//   this.name = name;
//   return this;
// }
// const user1 = new (User as any)('Dan');
// console.log(user1.name); // Dan

// const User = function(this: user, name: string) {
//   this.name = name
// } as unknown as { new (name: string): user };
// const user1 = new User('Dan');

/* +--------------------Function Overloads--------------------+ */

// function fn(a: string): string[];
// function fn(a: number): string[];
// function fn(a: string[], sep?: string): string;
// function fn(a: string | number | string[], sep?: string): string | string[] {
//   if (typeof a === 'string') {
//     return a.split('');
//   } else if (typeof a === 'number') {
//     return a.toString().split('');
//   } else {
//     return a.join(sep ?? '');
//   }
// }

// fn('test'); // ['t', 'e', 's', 't']
// fn(1234); // ['1', '2', '3', '4']
// fn(['a', 'b', 'c'], '|'); // 'a|b|c'
// // fn(true); // error

/* +--------------------Overloading Arrow Functions--------------------+ */

// type fn2 = {
//   (a: string): string[];
//   (a: number): string[];
//   (a: string | number | string[], sep?: string): string | string[];
// }

// const ol = ((a: string | number | string[], sep?: string): string | string[] => {
//   if (typeof a === 'string') {
//     return a.split('');
//   } else if (typeof a === 'number') {
//     return a.toString().split('');
//   } else {
//     return a.join(sep ?? '');
//   }
// }) as fn2;

// ol('test'); // ['t', 'e', 's', 't']
// ol(1234); // ['1', '2', '3', '4']
// ol(['a', 'b', 'c'], '|'); // 'a|b|c'

// function fn3(callback: fn2): void {
//   callback('test');
// }
