/* +--------------------Declaring Modular Libraries--------------------+ */

/**
 * Simple modular string utils
 * @license MIT
 */
export declare namespace str {
  const version: '1.0.0';
  function lastChar(word: string): string;
  function ordinalize(dayOfMonth: number | string): string;
}

/* +--------------------Declaring Default Exports--------------------+ */

export default function reverse(word: string): string;

/* +--------------------Declaring Classes--------------------+ */

export declare class Word {
  count(sentence: string): number;
}
