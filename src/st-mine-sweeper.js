import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const newMatrix = matrix.map((row) => row.map(() => 0));

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        newMatrix[i][j] = 1;
      } else {
        let counter = 0;

        if (matrix[i - 1] !== undefined && matrix[i - 1][j - 1] === true) {
          counter += 1;
        }
        if (matrix[i - 1] !== undefined && matrix[i - 1][j] === true) {
          counter += 1;
        }
        if (matrix[i - 1] !== undefined && matrix[i - 1][j + 1] === true) {
          counter += 1;
        }
        if (matrix[i][j - 1] === true) {
          counter += 1;
        }
        if (matrix[i][j + 1] === true) {
          counter += 1;
        }
        if (matrix[i + 1] !== undefined && matrix[i + 1][j - 1] === true) {
          counter += 1;
        }
        if (matrix[i + 1] !== undefined && matrix[i + 1][j] === true) {
          counter += 1;
        }
        if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1] === true) {
          counter += 1;
        }

        newMatrix[i][j] = counter;
      }
    }
  }

  return newMatrix;
}

// console.log(
//   minesweeper([
//     [true, false, false],
//     [false, true, false],
//     [false, false, false],
//   ])
// );

// console.log([
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1],
// ]);
