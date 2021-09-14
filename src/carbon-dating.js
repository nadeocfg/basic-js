import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === 'string' &&
    sampleActivity &&
    parseFloat(sampleActivity) &&
    parseFloat(sampleActivity) > 0 &&
    parseFloat(sampleActivity) < MODERN_ACTIVITY
  ) {
    const k = 0.693 / HALF_LIFE_PERIOD;

    const t = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);

    return t;
  }

  return false;
}

// console.log(dateSample('ACTIVITY OVER 9000'));
// console.log(dateSample('one'));
// console.log(dateSample(''));
// console.log(dateSample(' '));
// console.log(dateSample(' \n\t\r'));

// console.log(dateSample('3'), 13305);
// console.log(dateSample('1'), 22387);
// console.log(dateSample('9'), 4223);
// console.log(dateSample('11'), 2564);

// const k = 0.693 / HALF_LIFE_PERIOD
// Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k)
