import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }

  if (arr instanceof Array !== true) {
    throw new Error({
      message: `${arr} parameter must be an instance of the Array!`,
    });
  }

  const res = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) {
      res.push(null);
      i += 1;
    } else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined) {
      res.pop();
      res.push(null);
    } else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) {
      res.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
      res.push(res[i - 1]);
    } else if (typeof arr[i] === 'number') {
      res.push(arr[i]);
    }
  }

  return res.filter((item) => item !== null && item !== undefined);
}

// console.log(transform(3.312312));
// console.log(transform(false));
// console.log(transform(null));
// console.log(transform(undefined));
// console.log(transform({ foo: 'bar' }));
