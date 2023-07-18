/* +--------------------Namespaces--------------------+ */

// namespace StringUtils {
//   export const reverse = (str: string) => str.split('').reverse().join('');
// };
// namespace NumberUtils {
//   export const reverse = (num: number) => parseInt(num.toString().split('').reverse().join(''), 10);
// };

// StringUtils.reverse('abc'); // cba
// NumberUtils.reverse(123); // 321

/* +--------------------Namespace Merging--------------------+ */

// namespace NsTest {
//   export const str = 'abc'
// };
// namespace NsTest {
//   export const str = 123;
// };

// NsTest.str; // abc
// NsTest.num; // 123
