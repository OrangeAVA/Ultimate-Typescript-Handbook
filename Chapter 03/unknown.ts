/* +--------------------Unknown--------------------+ */

// let notKnown: unknown;

// notKnown.test = 'fail';
// notKnown();
// notKnown = { test: 'test' };
// notKnown = () => 'test';
// notKnown = [1, 2, 3];

/* all produce errors */
// notKnown.test';
// notKnown();
// notKnown[0];

// notKnown = 'test';
// if (notKnown === 'test') {
//   console.log('we will see this log message');
// }
