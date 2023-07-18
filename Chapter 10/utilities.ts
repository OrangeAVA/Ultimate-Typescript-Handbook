/* +--------------------Awaited--------------------+ */

// type ApiResponse = {
//   data: string;
// }
// type unwrappedApiResponse = Awaited<Promise<ApiResponse>>;

// async function getApiResponse(): Promise<ApiResponse> {
//   return { data: 'test'};
// }

// type RespType = Awaited<ReturnType<typeof getApiResponse>>;

/* +--------------------ConstructorParameters--------------------+ */

// type ConstructorParams = ConstructorParameters<ObjectConstructor>;

// class Car {
//   constructor(public model: string) {}
// }
// type CarConstructorParams = ConstructorParameters<typeof Car>;

/* +--------------------Exclude--------------------+ */

// type AllMembers = string | number | boolean;
// type ExcludeMembers = string | number;
// type RemainingMembers = Exclude<AllMembers, ExcludeMembers>;

/* +--------------------Extract--------------------+ */

// type AllMembers = string | number | boolean;
// type ExtractMembers = string | number;
// type RemainingMembers = Extract<AllMembers, ExtractMembers>;

/* +--------------------InstanceType--------------------+ */

// class Cat {
//   constructor(public name: string) {}
//   meow() { console.log('Meow') }
// }
// class Dog {
//   constructor(public name: string) {}
//   bark() { console.log('Woof') }
// }

// function PetFactory<T extends new (...args: any[]) => any>(pet: T, n: string): InstanceType<T> {
//   return new pet(n);
// }

// const kitty = PetFactory(Cat, 'fluffy');
// console.log(kitty.name); // fluffy
// kitty.meow(); // error without InstanceType<T>

/* +--------------------NonNullable--------------------+ */

// type CannotBeNull = NonNullable<string | null | undefined>

// type NotNull = {};
// const notNull1: NotNull = 1; // Fine
// const notNull2: NotNull = 'Not empty!'; // Fine
// const notNull3: NotNull = true; // Fine
// const notNull4: NotNull = ['anything']; // Fine
// const notNull5: NotNull = { a: null }; // Fine

// const notNull6: NotNull = null; // Error
// const notNull7: NotNull = undefined; // Error

// type CannotBeNull2 = (string | null | undefined) & {}

// type HasNull = { a: string | null }
// type CanContainNull = NonNullable<HasNull>
// const someObj: CanContainNull = {
//   a: null,
// }

/* +--------------------Omit--------------------+ */

// interface Operations {
//   create: () => void;
//   read: () => void;
//   update: () => void;
//   delete: () => void;
// }
// type WriteOps = 'create' | 'update' | 'delete'
// type ReadOnlyOps = Omit<Operations, WriteOps>;
// const read: ReadOnlyOps = {
//   read: () => undefined,
// }

/* +--------------------OmitThisParameter--------------------+ */

// type User = {
//   name: string;
// };
// function getUserName(this: User): string {
//   return this.name;
// }
// const userName = getUserName.call({ name: 'Bill' });

// const fnWithoutThisParam: OmitThisParameter<typeof getUserName> = getUserName.bind({ name: 'Fred' });

/* +--------------------Partial--------------------+ */

// type Mandatory = {
//   required: string;
// }
// const mustHaveRequired: Mandatory = {
//   required: '',
// }
// type NonMandatory = Partial<Mandatory>;
// const mightHaveRequired: NonMandatory = {};

/* +--------------------Parameters--------------------+ */

// type FnParams = Parameters<(a: string, b: number) => void>;
// function myFn(a: boolean, b: string): void {};
// type FnParams2 = Parameters<typeof myFn>

/* +--------------------Pick--------------------+ */

// interface Operations {
//   create: () => void;
//   read: () => void;
//   update: () => void;
//   delete: () => void;
// }
// type WriteOps = 'create' | 'update' | 'delete';
// type Write = Pick<Operations, WriteOps>;
// const write: Write = {
//   create: () => undefined,
//   update: () => { undefined },
//   delete: () => { undefined },
// }

/* +--------------------Readonly--------------------+ */

// type Writable = {
//   canBeWritten: string;
// }
// const notReadonly: Writable = { canBeWritten: 'yes' };
// notReadonly.canBeWritten = 'new!';

// type NotWritable = Readonly<Writable>;
// const readonly: NotWritable = { canBeWritten: 'no' };
//readonly.canBeWritten = 'nope'; // Error

/* +--------------------Record--------------------+ */

// interface Person { age: number };
// type Names = 'roger'|'dave';
// type Guitarists = Record<Names, Person>;

// const pf: Guitarists = {
//   roger: { age: 79 },
//   dave: { age: 76 },
// };

// type Example = Record<string, number>;
// const ex: Example = { a: 1 };
// type Example2 = { [key: string]: number };

/* +--------------------Required--------------------+ */

// type NonMandatory = {
//   optional?: string;
// }
// const mightHaveOptional: NonMandatory = {};
// type Mandatory = Required<NonMandatory>;

// const mustHaveOptional: Mandatory = {
//   optional: '',
// };

/* +--------------------ReturnType--------------------+ */

// type fnReturn = ReturnType<() => boolean>;

// function myFn(arg0: string): number { return 1; }
// type alsoFnReturn = ReturnType<typeof myFn>;

/* +--------------------ThisParameterType--------------------+ */

// type User = {
//   name: string;
// };
// function getUserName(this: User): string {
//   return this.name;
// }

// type fnThisType = ThisParameterType<typeof getUserName>;

/* +--------------------ThisType--------------------+ */

// type libCore = {
//   version: '1.2'
// };
// type lib = {
//   helperFn: Function
// } & ThisType<libCore>

// const myLib: lib = {
//   helperFn: function() { return this.version }
// }
