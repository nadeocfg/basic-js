import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const strFromNum = n + '';
  let max = 0;

  for (let i = 0; i < strFromNum.length; i += 1) {
    if (max < +strFromNum.replace(strFromNum.substr(i, 1), '')) {
      max = +strFromNum.replace(strFromNum.substr(i, 1), '');
    }
  }

  return max;
}
