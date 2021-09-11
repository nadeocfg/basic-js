import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    if (arr.length === 0) {
      return depth;
    }

    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        return depth + this.calculateDepth(arr.flat());
      }
    }

    return depth;
  }
}

const depthCalc = new DepthCalculator();

console.log(
  depthCalc.calculateDepth([
    1,
    [8, [[]]],
    2,
    3,
    [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ['6575', ['adas', ['dfg', [0]]]],
  ])
);

// console.log([[[[]]], [[[[[[]]]]]]].flat().length);
// console.log([[[[]]], [[[[[[]]]]]]].flat().flat().length);
// console.log([[[[]]], [[[[[[]]]]]]].flat().flat().flat().length);
// console.log([[[[]]], [[[[[[]]]]]]].flat().flat().flat().flat().length);
// console.log([[[[]]], [[[[[[]]]]]]].flat().flat().flat().flat().flat().length);
// console.log(
//   [[[[]]], [[[[[[]]]]]]].flat().flat().flat().flat().flat().flat().length
// );
