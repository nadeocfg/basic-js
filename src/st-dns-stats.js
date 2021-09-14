import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arr) {
  const res = {};

  for (let i = 0; i < arr.length; i += 1) {
    const reverse = arr[i].split('.').reverse();

    for (let j = 0; j < reverse.length; j += 1) {
      const domain = [...reverse].splice(0, j + 1).join('.');

      if (res['.' + domain] !== undefined) {
        res['.' + domain] += 1;
      } else {
        res['.' + domain] = 1;
      }
    }
  }

  return res;
}

// console.log(getDNSStats(['epam.com', 'info.epam.com']));
// console.log({ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
