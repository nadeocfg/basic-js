import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(str1, str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  let counter = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        counter += 1;
        arr2[j] = null;
        break;
      }
    }
  }

  return counter;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));
console.log(3);

console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));
console.log(4);

console.log(getCommonCharacterCount('abca', 'xyzbac'));
console.log(3);

console.log(getCommonCharacterCount('', 'abc'));
console.log(0);
