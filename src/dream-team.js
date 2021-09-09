import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
  if (!arr) {
    return false;
  }

  let res = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (!!arr[i] && !!arr[i][0] && typeof arr[i] === 'string') {
      res += arr[i].trim().toUpperCase()[0];
    }
  }

  return res === '' ? false : res.split('').sort().join('');
}
