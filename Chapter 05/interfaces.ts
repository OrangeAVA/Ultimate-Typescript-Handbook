/* +--------------------Interfaces--------------------+ */

// interface Person {
//   name: string;
//   age: number;
// };

// const me: Person = {
//   name: 'Dan',
//   age: 44,
//   interests: ['TypeScript'],
// };

// interface Person {
//   readonly name: string;
//   age: number;
//   interests?: string[];
// };

// const me: Person = {
//   name: 'Dan',
//   age: 44,
// };

// me.name = 'Bill'; // error

// interface AnyProps {
//   [key: string]: any;
// };

// const random: AnyProps = {
//   literallyAnything: 'Just has to be a string',
// };

// interface PersonName {
//   firstName: string;
//   familyName: string;
//   otherNames?: string[];
// };

/* +--------------------Interface Merging--------------------+ */

// interface Person {
//   name: PersonName;
//   age: number;
//   interests?: string[];
// };

// interface Person {
//   height?: number;
// };

// const me: Person = {
//   name: {
//     firstName: 'Dan',
//     familyName: 'Wellman',
//   },
//   age: 44,
//   interests: ['Swimming'],
// };

/* +--------------------Extending Interfaces--------------------+ */

// interface Developer extends Person {
//   languages: string[];
// };

// const dev: Developer = {
//   name: {
//     firstName: 'Dan',
//     familyName: 'Wellman',
//   },
//   age: 44,
//   languages: ['TypeScript', 'JavaScript'],
// };

// interface FirstAider {
//   cprTrained: boolean;
// };

// interface DevManager extends Developer, FirstAider {
//   // members from all Person, Developer, and FirstAider interfaces
// };

// interface MethodTest {
//   method(arg0: string): string;
// };

// interface MethodTest {
//   method(arg0: number): number;
// };
