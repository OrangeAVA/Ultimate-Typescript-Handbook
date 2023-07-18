/* +--------------------Declaring Global Libraries--------------------+ */

/**
 * Simple string utils
 * @license MIT
 */
declare namespace str {
  const version: '1.0.0';
  // let version: '1.0.0';

  /**
   * lastChar
   * @param word {string} - The word to get the last character of
   * @returns string
   */
  function lastChar(word: string): string;

  /**
   * ordinalize
   * @param {number|string} dayOfMonth - the day of the month to ordinalize
   * @returns {string}
   */
  function ordinalize(dayOfMonth: number | string): string;
}

/* +--------------------Declaring Global Functions and Variables--------------------+ */

declare const globalMessage: string;
declare function getGlobalMessage(): string;

/* +--------------------Augmenting Built-ins--------------------+ */

interface String {
  reverse(this: string): string;
}
