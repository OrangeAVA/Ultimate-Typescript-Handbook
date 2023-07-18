/* +--------------------Object Types--------------------+ */

// let car: { doors: number, make: string };
// car = { doors: 5 }; // error
// car = { doors: 5, make: 'Tesla', oops: 'whoops' }; // error
// car = { doors: 5, make: 2 }; // error
// car = { doors: 5, make: 'Tesla' }; // perfect

// let car: { drive: (arg0: string) => void };
// car = {
//   drive: (direction: string) => {
//     // drive in the direction
//   },
// };

// const result = car.drive('forward');
// if (result) {
  // error
// };

/* +--------------------Property Modifiers--------------------+ */

// interface Car {
//   doors?: number;
//   readonly make: string;
// };
// const car2: Car = { make: 'Porsche' };

/* +--------------------Index Signatures--------------------+ */

// interface Car {
//   [prop: string]: string | boolean | number;
//   readonly [id: number]: number;
// };
// const car3: Car = { make: 'Lotus', spoiler: true };
// const car4: Car = { make: 'Lotus', 0: 168 };
// const topSpeedMph = car4[0]; // 168
// car4[0] = 200; // error

/* +--------------------Intersections--------------------+ */

// interface Vinyl {
//   rpm?: number;
//   title: string;
// };
// interface Cd {
//   trackNumber?: number;
//   title: string;
// };

// interface CircularMedia extends Vinyl, Cd {}

// const album: CircularMedia = {
//   rpm: 45,
//   title: 'Dark Side of the Moon',
// }
//interface CircularMedia extends Vinyl, Cd {}
// const album: CircularMedia = {
//    rpm: 45,
//    title: 'Dark Side of the Moon',
// }

// const album: Vinyl & Cd = {
//   rpm: 45,
//   title: 'Dark Side of the Moon'
// };
// type CircularMedia = Vinyl & Cd;

// type mp3 = { bitrate?: number };
// type mp4 = { encoding?: string };
// type digitalMedia = mp3 & mp4;

/* +--------------------Generic Object Types--------------------+ */

// interface Warning {
//   level: string;
//   text: string;
// }
// interface Info {
//   level: string;
//   text: string;
// }
// interface Modal<Type> {
//   message: Type;
// }

// const dataLoss: Warning = {
//   level: 'error',
//   text: 'Data may be lost, continue?',
// };
// const completed: Info = {
//   level: 'info',
//   text: 'Process complete',
// };
// const dataLossModal: Modal<Warning> = { message: dataLoss };
// const saveFinished: Modal<Info> = { message: completed };

// type Modal<Type> = {
//   message: Type;
// };
// type Warning = {
//   level: string;
//   text: string;
// };
// type Info = {
//   level: string;
//   text: string;
// };

// const dataLoss: Warning = {
//   level: 'error',
//   text: 'Data may be lost, continue?',
// };
// const completed: Info = {
//   level: 'info',
//   text: 'Process complete',
// };
// const dataLossModal: Modal<Warning> = { message: dataLoss };
// const completedModal: Modal<Info> = { message: completed };

/* +--------------------Readonly Utility Type--------------------+ */

// interface ReadWrite { prop: string };
// let writable: ReadWrite = { prop: 'init'};
// writable.prop = 'can overwrite';

// let notWritable: Readonly<ReadWrite>;
// notWritable = { prop: 'init' };
// notWritable.prop = 'nope'; // error
