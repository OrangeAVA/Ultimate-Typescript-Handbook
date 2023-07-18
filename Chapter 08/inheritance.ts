/* +--------------------Inheritance--------------------+ */

/* 1 */

// class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) { }
// }

// class Square extends Shape {
//   constructor(public sidesLength: number) {
//     super('square', true);
//   }

//   getArea(): number {
//     return this.sidesLength ** 2;
//   }
// }

// const myShape = new Square(3);
// console.log(myShape.getArea()); // 9
// console.log(myShape.kind); // square

/* 2 */

// class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) { }

//   logKind(): void {
//     console.log('Base kind: ', this.kind);
//   }
// }

// class Square extends Shape {
//   logKind(): void {
//     console.log('Derived kind: ', this.kind);
//   }
// }

// const generic = new Shape('shape');
// const box = new Shape('cuboid');

// generic.logKind(); // Base kind: shape
// box.logKind(); // Derived kind: cuboid
