/* +--------------------Generic Classes--------------------+ */

// class Shape<T> {
//   constructor(public kind: T) {}
// }

// class Square {
//   constructor(public sidesLength: number) {}
// }

// class Triangle {
//   constructor(
//     public sidesLength: [number, number, number],
//     public angles: [number, number, number]
//   ) {}
// }

// const mySquare = new Square(3);
// const myTriangle = new Triangle([2, 2, 2], [60, 60, 60]);
// const myShape = new Shape(mySquare);
// const otherShape = new Shape(myTriangle);
// console.log(myShape.kind); // Square
// console.log(otherShape.kind); // Triangle
// const allShapes: Shape<any>[] = [myShape, otherShape];
// const allSquares: Shape<Square>[] = [myShape];
