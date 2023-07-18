/* +--------------------Abstract Classes--------------------+ */

// abstract class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) { }
// }

// class Square extends Shape {
//   constructor(public sidesLength: number) {
//     super('square', true);
//   }
// }

// const badShape = new Shape('triangle'); // error

/* +--------------------Abstract Properties--------------------+ */

// abstract class Shape {
//   public abstract kind: string;
//   constructor(public isEuclidian?: boolean) { }
// }

// class Square extends Shape {
//   constructor(public kind: string, public sidesLength: number) {
//     super(true);
//   }
// }

// const mySquare = new Square('square', 3); // fine

/* +--------------------Abstract Methods--------------------+ */

// abstract class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) { }
//   abstract getKind(): string;
// }

// class Square extends Shape {
  // constructor(public kind: string, public sidesLength: number) {
  //   super('square', true);
  // }

//   getKind(): string {
//     return this.kind;
//   }
// }

/* +--------------------Abstract Construct Signatures--------------------+ */

// abstract class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) { }
// }
