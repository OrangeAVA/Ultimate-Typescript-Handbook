/* +--------------------Arrays--------------------+ */

// const strings: string[] = [];
// const strings: Array<string> = ['test'];

// enum Status {
//   Waiting,
//   Complete,
// }

// const statuses: Status[] = [Status.Waiting];

// interface Process {
//   name: string,
//   status: Status,
// }

// const processes: Process[] = [{ name: 'Process 1', status: Status.Waiting }];
// const strings: Array<string> = [];

// const codes: (string|number)[] = [1, '2'];
// const codes: Array<string|number> = [1, '2'];
// const codes: Array<string|number> = [1, '2'];

/* +--------------------Array Type Inference--------------------+ */

// const ids = ['1A', '1B']; // string[]
// const altIds = [1, '1a']; // (string|number)[]
// const processes = [{ name: 'Process 1', status: Status.Waiting }]; // Process[]

/* +--------------------Read-only Arrays--------------------+ */

// const unmodifiable: readonly string[] = ['cannot be changed'];
// const unmodifiable: readonly Array<string> = ['cannot be changed']; // error
// unmodifiable.push('oops'); // error
// unmodifiable[0] = 'cannot do it';

// const unmodifiable2: ReadonlyArray<string> = ['immutable'];
