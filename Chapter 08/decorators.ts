/* +--------------------Class Decorators--------------------+ */

/* 1 */

// function Decorated(target: typeof Shape) {
//   return class extends target {
//     kind = 'decorated-shape'
//   }
// }

// @Decorated
// class Shape {}

// const myShape = new Shape();
// (myShape as any).kind; // decorated-shape

/* 2 */

// function Decorated(target: typeof Shape) {
//   return class extends target {
//     kind = 'decorated-shape'
//   }
// }

// function DecoratedAgain(target: typeof Shape) {
//   return class extends target {
//     special = 'decorated again!'
//   }
// }

// @Decorated
// @DecoratedAgain
// class Shape {}

// const myShape = new Shape();
// (myShape as any).special; // decorated again!

