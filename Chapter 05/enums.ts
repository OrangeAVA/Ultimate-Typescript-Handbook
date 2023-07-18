/* +--------------------Numeric Enums--------------------+ */

// enum Fruit {
//   Apple,
//   Blackberry,
//   Melon,
// };

//console.log(Fruit.Blackberry); // 1

// enum Fruit {
//   Apple = 5,
//   Blackberry = 6,
//   Melon = 7,
// };

// function determinePortionSize(fruit: Fruit) {
//   switch (fruit) {
//     case Fruit.Apple:
//       return 1;
//     case Fruit.Blackberry:
//       return 10;
//     case Fruit.Melon:
//       return 0.5;
//   }
// };
// determinePortionSize(Fruit.Blackberry); // 10
// determinePortionSize(6); // 10
// determinePortionSize(60); // undefined

// enum Fruit {
//   Apple = 5,
//   Blackberry,
//   Melon,
// };

// enum Fruit {
//   Apple = -5,
//   Blackberry = 6 * 2,
//   Melon = 7 ^ 2,
// };

// const enum TropicalFruit {
//   Mango,
//   Papaya,
//   Melon = Fruit.Melon,
// };

// function returnTen() { return 10 }

// enum Drupes {
//   Plum = 5,
//   Peach = 5,
// };

/* +--------------------Reverse Mapping--------------------+ */

// console.log(Fruit[5]); // Apple

/* +--------------------Exhaustiveness and the never Type--------------------+ */

// function handleUnknownMember(member: never): never {
//   throw new Error('Unhandled enum member: ' + Fruit[member]);
// }

// function determinePortionSize(fruit: Fruit) {
//   switch (fruit) {
//     case Fruit.Apple:
//       return 1;
//     case Fruit.Blackberry:
//       return 10;
//     case Fruit.Melon:
//       return 0.5;
//     case Fruit.Banana:
//       return 1;
//     default:
//       handleUnknownMember(fruit as never);
//   }
// }
// determinePortionSize(Fruit.Banana);
// console.log(determinePortionSize(Fruit.Blackberry)); // 10

// enum Fruit {
//   Apple = 5,
//   Blackberry = 6,
//   Melon = 7,
//   Banana = 8,
// };

/* +--------------------String Enums--------------------+ */

// enum Vegetables {
//   Pea = 'PEA',
//   Potato = 'POTATO',
//   Cabbage = 'CABBAGE',
// };

// function peelVegetable(vegetable: Vegetables) {
//   // do something
// }

// peelVegetable('Potato'); // Not fine
// peelVegetable(Vegetables.Potato); // Fine

/* +--------------------Heterogeneous Enums--------------------+ */

// enum Vegetables {
//   Pea = 'PEA',
//   Potato = 0,
//   Cabbage,
//   Corn = 'CORN',
//   Parsnip = 5,
//   Spinach,
// };
// console.log(Vegetables.Spinach); // 6

// enum Vegetables2 {
//   Onion = 'Onion',
//   Kale = Vegetables.Cabbage,
// };

/* +--------------------Computed Enums--------------------+ */

// enum TropicalFruit {
//   Mango,
//   Papaya,
//   Melon = Fruit.Melon,
//   PassionFruit = returnTen()
// };
// function returnTen() { return 10 }

// enum Vegetables2 {
//   Onion = 'Onion',
//   Kale = Vegetables.Cabbage, // error
// };

/* +--------------------Literal Enums--------------------+ */

// interface Legume {
//   vegetable: Vegetables.Pea;
// };

// interface Tuber {
//   vegetable: Vegetables.Potato;
// };

// const myTuber: Tuber = {
//   vegetable: Vegetables.Pea,
// };

// function grow(seed: Vegetables) {
//   if (seed !== Vegetables.Pea || seed !== Vegetables.Cabbage) {
//     // plant Potato
//   }
// }

/* +--------------------Inlining Enums--------------------+ */

// const enum Tools {
//   Hammer,
//   Drill,
// };

// function doItYourself(tool: Tools) {
//   if (tool === Tools.Hammer) {
//     console.log('Hammer time');
//   }
// }

// doItYourself(Tools.Hammer); // Hammer time

/* +--------------------Using the keyof Operator--------------------+ */

// type FruitKeys = keyof typeof Fruit;
// const fruits: FruitKeys = 'Apple';
