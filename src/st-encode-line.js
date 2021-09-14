import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const res = [];
  const arr = str.split('');

  let tempChar = '';
  let counter = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!tempChar || tempChar !== arr[i]) {
      res.push((counter > 1 ? counter : '') + tempChar);
      tempChar = arr[i];
      counter = 1;
    } else {
      counter += 1;
    }

    if (i === arr.length - 1) {
      res.push((counter > 1 ? counter : '') + tempChar);
    }
  }

  return res.join('');
}

// console.log(encodeLine('abbcca'));
// console.log('a2b2ca');

// console.log(encodeLine('aabbccc'));
// console.log('2a2b3c');
