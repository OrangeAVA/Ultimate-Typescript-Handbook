/* +--------------------Narrowing--------------------+ */

// const which: string | number = 'str';
// which.concat('a');

// const num1 = 1;
// let num2 = 2;

/* +--------------------Truthy Type Guards--------------------+ */

// type Wrapper = {
//   contents?: string;
// }

// const myWrapper: Wrapper = {};
// ''.concat(myWrapper.contents); // Error
// if (myWrapper.contents) {
//   ''.concat(myWrapper.contents); // Fine
// }

/* +--------------------Narrowing With typeof--------------------+ */

// function getIdPrefix(id: string | number) {
//   // if (typeof id === 'string') {
//   //   return id.slice(0, 3);
//   // } else {
//   //   return id.toString().slice(0, 3);
//   // }
//   switch (typeof id) {
//     case 'string':
//       return id.slice(0, 3);
//     case 'number':
//       return id.toString().slice(0, 3);
//   }
// }

/* +--------------------Handling null Values--------------------+ */

// type Rocket = { launch: () => void };
// function attemptLaunch(rocket: Rocket | null) {
//   if (rocket !== null) {
//     rocket.launch();
//   }
// }

/* +--------------------Narrowing With instanceof--------------------+ */

// class Employee {
//   work = () => console.log('Working');
// }

// class Manager {
//   manage = () => console.log('Managing');
// }

// function work(emp: Employee | Manager) {
//   if (emp instanceof Employee) {
//     emp.work();
//   } else {
//     emp.manage();
//   }
// }

/* +--------------------Narrowing With the in Operator--------------------+ */

// type SaveLocally = {
//   saveInLocalStorage: () => boolean;
// };
// type SaveRemotely = {
//   sendToApi: () => boolean;
// };

// function save(item: SaveLocally | SaveRemotely): boolean {
//   if ('saveInLocalStorage' in item) {
//     return item.saveInLocalStorage();
//   } else {
//     return item.sendToApi();
//   }
// }

/* +--------------------Narrowing With Type Predicates--------------------+ */

// type MachineKind = 'robot' | 'drone';
// interface Machine { kind: MachineKind; }

// class Humanoid implements Machine {
//   kind: MachineKind = 'robot';
//   walk() { /* do walking */ }
// }

// function machineIsHumanoid(machine: Machine): machine is Humanoid {
//   // return machine.kind === 'robot';
//   return 'walk' in machine;
// }

// const terminator: Machine = new Humanoid();
// // terminator.walk();

// if (machineIsHumanoid(terminator)) {
//   terminator.walk();
// }

/* +--------------------Discriminated Unions--------------------+ */

// interface Car {
//   drive: () => void;
//   kind: 'car';
// }
// interface Truck {
//   haul: () => void;
//   kind: 'truck';
// }
// interface Plane {
//   fly: () => void;
//   kind: 'plane';
// }
// type Vehicle = Car | Truck | Plane;

// const myJet: Vehicle = {
//   kind: 'plane',
//   fly: () => { /* do flying */ }
// };
// myJet.fly();

/* +--------------------Assertion Functions--------------------+ */

/* 1 */

// type User = { name: string; getName?: () => string; }
// type Artifact = { id: string, getId?: () => string; }

// const mightBeUser: User | Artifact = {
//   name: 'test',
//   getName: () => 'test',
// };

// function assertIsUser(test: any): asserts test {
//   if (!test) throw new Error('Not a valid user');
// }

// assertIsUser(mightBeUser.getName !== undefined);

/* 2 */

// type User = { name: string; getName: () => string; }
// type Artifact = { id: string, getId: () => string; }

// function assertIsUser(maybeUser: any): asserts maybeUser is User {
//   if (maybeUser.name === undefined || maybeUser.getName === undefined) {
//     throw new Error('Not a valid user');
//   }
// }

// function getName(obj: User | Artifact) {
//   assertIsUser(obj);
//   return obj.getName();
// }

/* +--------------------Using as const--------------------+ */

/* 1 */

// let num2 = 2 as const;
// num2 = 3; // error

/* 2 */

// const mutable = [];
// mutable.push('yay'); // Fine

// const immutable = ['constant'] as const;
// immutable[0]; // constant
// immutable.push('nope'); // Error
// immutable[0] = 'nope'; // Error

/* 3 */

// const mutableObj = { test: 'anything' };
// mutableObj.test = 'something else'; // fine

// const immutableObj = { test: 'anything' } as const;
// immutableObj.test = 'something else'; // error




