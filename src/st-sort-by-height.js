import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const indexArr = [];
  const cleanArr = [];
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      indexArr.push(i);
    } else {
      cleanArr.push(arr[i]);
    }
  }

  let offset = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (indexArr.includes(i)) {
      res.push(-1);
      offset += 1;
    } else {
      res.push(cleanArr.sort((a, b) => a - b)[i - offset]);
    }
  }

  return res;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log([-1, 150, 160, 170, -1, -1, 180, 190]);

// console.log('---------------------------------------------');

// console.log(sortByHeight([-1, -1, -1, -1, -1]));
// console.log([-1, -1, -1, -1, -1]);

// console.log('---------------------------------------------');

// console.log(sortByHeight([-1]));
// console.log([-1]);

// console.log('---------------------------------------------');

// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
// console.log([2, 2, 4, 9, 11, 16]);

// console.log('---------------------------------------------');

// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// console.log([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
