import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const strArr = [];
  const additionArr = [];

  for (let j = 0; j < additionRepeatTimes; j += 1) {
    additionArr.push(addition + '');
  }

  const additionStr = additionArr.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i += 1) {
    strArr.push(str + additionStr);
  }

  return strArr.join(separator);
}
