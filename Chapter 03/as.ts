/* +--------------------The as Operator--------------------+ */

// let anotherVar = 'another' as string;

/* +--------------------Down-casting--------------------+ */

// function clickHandler(event: Event) {
//   const childElement = (event.target as HTMLElement).querySelector('#child');
// }

/* +--------------------Compound Casting--------------------+ */

// const testEvent = { target: document.createElement('div') } as unknown as Event;
// testEvent.banana(); // Property 'banana' does not exist on 'Event'

// let boolean = 1 as boolean;

/* +--------------------Old Type-Casting Syntax--------------------+ */

// let myNum = <number>1;
