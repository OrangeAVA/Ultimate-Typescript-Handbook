export const myLib = {
  _version: '0.0.1',
  version: () => myLib._version,
  reverseString: (str: string) => str.split('').reverse().join('')
}
