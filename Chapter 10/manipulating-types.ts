/* +--------------------Generics--------------------+ */

/* 1 */

// interface Identifier<Id> {
//   value: Id;
// }

// const stringId: Identifier<string> = { value: 'abc123' };
// const numberId: Identifier<number> = { value: 123 };
// const symbolId: Identifier<symbol> = { value: Symbol() };

/* 2 */

// type Identifier<Id> = { value: Id };

// const stringId: Identifier<string> = { value: 'abc123' };
// const numberId: Identifier<number> = { value: 123 };
// const symbolId: Identifier<symbol> = { value: Symbol() };

/* 3 */

// class Shape<Kind> {
//   constructor(public kind: Kind) {}
// }

// class Square {
//   constructor(public sidesLength: number) {}
// }
// const myShape: Shape<Square> = new Shape(new Square(5));
// console.log(myShape.kind); // Square
// console.log(myShape.kind.sidesLength); // 5

/* 4 */

// type Email = {
//   to: string;
// };
// type Sms = {
//   to: number;
// };

// function send<T extends object>(item: T): T {
//   if ('to' in item && typeof item.to === 'string') {
//     // send email
//   } else if ('to' in item && typeof item.to === 'number') {
//     // send sms
//   }
//   return item;
// }

// const msg: Email = { to: 'someone@somwhere' };
// send(msg);

/* +--------------------Conditional Types--------------------+ */

// interface BaseType { a: string };
// interface SubType extends BaseType { b: number };
// interface OtherType { c: boolean };

// type conditionalType = SubType extends BaseType
//   ? string
//   : number; // True, string

// type conditionalType = OtherType extends BaseType
//   ? string
//   : number; // False, number

/* +--------------------Indexed Access Types--------------------+ */

// type User = {
//   id: string | number;
//   email: string;
// };
// type Id = User['id'];
// type IdOrEmail = User['id'|'email'];

// type Email = {
//   subject: string;
//   attachment: {
//     filename: string;
//     size: number;
//   };
// };
// type AttachmentSize = Email['attachment']['size'];

/* +--------------------Mapped Types--------------------+ */

/* 1 */

// type FalseType = {
//   a: false;
//   b: false;
// };
// type TrueType<T> = {
//   [P in keyof T]: true;
// };
// type NewType = TrueType<FalseType>;

/* 2 */

// type MakeReadonly<T> = {
//   +readonly [P in keyof T]: T[P];
// };
// type WritableType = {
//   [key: string]: string;
// };
// type NonWritableType = MakeReadonly<WritableType>;

/* 3 */

// type CompletelyOptional = {
//   a?: string;
//   b?: number;
// };
// type NotOptional<T> = {
//   [P in keyof T]-?: T[P];
// };
// type Mandatory = NotOptional<CompletelyOptional>;

/* 4 */

// type NamedProps = {
//   a: string;
//   b: number;
// };

// type AnyProps<T> = {
//   [P in keyof T as string]: T[P];
// };

// const rigid: NamedProps = { a: '', b: 1, c: 'oops' };
// type Flexible = AnyProps<NamedProps>;
// const flexible: Flexible = { a: '', b: 1, c: 'works' };
