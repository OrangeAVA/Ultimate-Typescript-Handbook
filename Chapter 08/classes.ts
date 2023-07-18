/* +--------------------Class Declarations--------------------+ */

// class Shape {
//   kind: string;

//   constructor(kind: string) {
//     this.kind = kind;
//   }
// }

/* +--------------------Class Expressions--------------------+ */

// const Shape = class {
//   kind: string;

//   constructor(kind: string) {
//     this.kind = kind;
//   }
// }

/* +--------------------Constructors--------------------+ */

/* 1 */
// const myShape = new Shape('square');
// myShape.kind; // square

// class Shape {
//   kind = 'square';

//   constructor(kind: string) {
//   }
// }

// const myShape = new Shape(); // error

/* 2 */
// class Shape {
//   kind: string;

//   constructor(kind = 'square') {
//     this.kind = kind;
//   }
// }

// const myShape = new Shape(); // fine
// const otherShape = new Shape('hexagon'); // also fine

/* 3 */
// class Shape {
//   kind: string;
//   isEuclidian: boolean | undefined;

//   constructor(kind: string, isEuclidian?: boolean) {
//     this.kind = kind;
//     this.isEuclidian = isEuclidian;
//   }
// }

// const ball = new Shape('sphere', false); // fine
// const wrong = new Shape(123); // error

/* +--------------------Constructor Overloading--------------------+ */

// class Shape {
//   kind: string;
//   isEuclidian: boolean | undefined;

//   constructor(kind: string);
//   constructor(kind: string, isEuclidian: boolean);
//   constructor(kind: string, isEuclidian?: boolean) {
//     this.kind = kind;
//     this.isEuclidian = isEuclidian;
//   }
// }

// const tile = new Shape('square', true);
// const ball = new Shape('sphere');

/* +--------------------Access Modifiers--------------------+ */

/* 1 */

// class Shape {
//   public kind: string;
//   public isEuclidian: boolean | undefined;

//   constructor(kind: string, isEuclidian?: boolean) {
//     this.kind = kind;
//     this.isEuclidian = isEuclidian;
//   }
// }

/* 2 */

// class Shape {
//   public kind: string;
//   public isEuclidian: boolean | undefined;

//   private constructor(kind: string, isEuclidian?: boolean) {
//     this.kind = kind;
//     this.isEuclidian = isEuclidian;
//   }
// }

// const hole = new Shape('circle'); // error

/* 3 */

// class Shape {
//   private kind = 'private';
// }

// const myShape = new Shape();
// console.log(myShape.kind); // error
// console.log(myShape['kind']); // private

/* +--------------------Private Members in JavaScript--------------------+ */

// class Shape {
//   #kind = 'private';
// }

// const myShape = new Shape();
// console.log(myShape.kind); // error

/* +--------------------Parameter Properties--------------------+ */

// class Shape {
//   constructor(public kind: string, public isEuclidian?: boolean) {}
// }

// const block = new Shape('cube');
// console.log(block.kind); // cube

/* +--------------------Getters and Setters--------------------+ */

// class Shape {
//   private _kind = 'shape';
//   private allowed = ['square', 'rectangle'];

//   get kind(): string {
//     return this._kind;
//   }

//   set kind(value: string) {
//     if (this.allowed.includes(value)) {
//       this._kind = value;
//     } else {
//       console.error('Kind not allowed');
//     }
//   }
// }

// const shape = new Shape();
// shape.kind = 'circle'; // error
// console.log(shape.kind); // shape

// shape.kind = 'square'; // allowed
// console.log(shape.kind); // square

/* +--------------------this Parameters--------------------+ */

// class Shape {
//   private _kind = 'shape';

//   getKind(this: Shape): string {
//     return this._kind;
//   }
// }

// const myShape = new Shape();
// console.log(myShape.getKind()); // shape

// const myObj = {
//   getKind: myShape.getKind
// };
// console.log(myObj.getKind()); // undefined

/* +--------------------Index Signatures--------------------+ */
// class Shape {
//   [i: number]: string;

//   constructor(public kind: string, public isEuclidian?: boolean) {
//     this[0] = crypto.randomUUID();
//   }
// }

// const plate = new Shape('circle');
// console.log(plate[0]); // a guid

/* +--------------------Implementing an Interface--------------------+ */

/* 1 */

// interface Placeable {
//   left: number;
//   top: number;
// }

// class Shape implements Placeable {
//   left: number;
//   top: number;
//   constructor(public kind: string, coords: placeable) {
//     this.left = coords.left;
//     this.top = coords.top;
//   }
// }

// const tile = new Shape('square', { left: 0, top: 0 });

/* 2 */

// interface Placeable {
//   left: number;
//   top: number;
//   zIndex?: number;
//   changeZIndex?: (newIndex: number) => void;
// }

/* +--------------------Static Class Members--------------------+ */

// class Shape {
//   private static shapeInstances: Shape[] = [];
//   constructor() {
//     Shape.shapeInstances.push(this);
//   }
//   static getShapes() {
//     return Shape.shapeInstances;
//   }
// }

// const myShape = new Shape();
// const myOtherShape = new Shape();

// console.log(Shape.getShapes().length); // 2

/* +--------------------Static Blocks--------------------+ */

// class Shape {
//   static allowedKinds: string[];
//   static {
//     Shape.allowedKinds = ['square'];
//   }
//   constructor(public kind: string) {
//     if (!Shape.allowedKinds.includes(kind)) {
//       throw new Error(`'${kind}' not allowed`);
//     }
//     this.kind = kind;
//   }
// }

// const shape1 = new Shape('square'); // fine
// const shape2 = new Shape('circle'); // Error: 'circle' not allowed
