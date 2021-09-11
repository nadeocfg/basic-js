import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const alphabetNum = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
  8: 'i',
  9: 'j',
  10: 'k',
  11: 'l',
  12: 'm',
  13: 'n',
  14: 'o',
  15: 'p',
  16: 'q',
  17: 'r',
  18: 's',
  19: 't',
  20: 'u',
  21: 'v',
  22: 'w',
  23: 'x',
  24: 'y',
  25: 'z',
};

export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arr = msg.toLowerCase().split('');
    const msgToNums = [];
    const keyStrToNums = [];
    const keyArr = this.messageToKeyArr(msg, key.toLowerCase());

    for (let i = 0; i < arr.length; i += 1) {
      msgToNums.push(
        alphabet[arr[i]] !== undefined ? alphabet[arr[i]] : '(=*-*=)' + arr[i]
      );
      keyStrToNums.push(
        alphabet[keyArr[i]] !== undefined ? alphabet[keyArr[i]] : keyArr[i]
      );
    }

    return this.getCryptedStrFromArrays(msgToNums, keyStrToNums);
  }

  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!');
    }

    const arr = msg.toLowerCase().split('');
    const msgToNums = [];
    const keyStrToNums = [];
    const keyArr = this.messageToKeyArr(msg, key.toLowerCase());

    for (let i = 0; i < arr.length; i += 1) {
      msgToNums.push(
        alphabet[arr[i]] !== undefined ? alphabet[arr[i]] : '(=*-*=)' + arr[i]
      );
      keyStrToNums.push(
        alphabet[keyArr[i]] !== undefined ? alphabet[keyArr[i]] : keyArr[i]
      );
    }

    return this.getDecryptedStrFromArrays(msgToNums, keyStrToNums);
  }

  messageToKeyArr = (str, key) => {
    let index = 0;
    const res = str.split('').reduce((acc, item) => {
      if (item.match(/[a-z]/i)) {
        if (key[index]) {
          acc.push(key[index]);
          index += 1;
        } else {
          index = 0;
          acc.push(key[index]);
          index += 1;
        }
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    return res;
  };

  getCryptedStrFromArrays = (msg, keyedMsg) => {
    const resArr = [];
    for (let i = 0; i < msg.length; i += 1) {
      if (/^\d+$/.test(msg[i])) {
        if (msg[i] + keyedMsg[i] < Object.keys(alphabet).length) {
          resArr.push(msg[i] + keyedMsg[i]);
        } else {
          resArr.push(msg[i] + keyedMsg[i] - Object.keys(alphabet).length);
        }
      } else {
        resArr.push(msg[i]);
      }
    }

    const res = resArr
      .reduce((acc, item) => {
        acc += alphabetNum[item] !== undefined ? alphabetNum[item] : item;
        return acc;
      }, '')
      .toUpperCase()
      .split('(=*-*=)');

    return this.type ? res.join('') : res.reverse().join('');
  };

  getDecryptedStrFromArrays = (msg, keyedMsg) => {
    const resArr = [];
    for (let i = 0; i < msg.length; i += 1) {
      if (/^\d+$/.test(msg[i])) {
        if (msg[i] - keyedMsg[i] < 0) {
          resArr.push(msg[i] + Object.keys(alphabet).length - keyedMsg[i]);
        } else {
          resArr.push(msg[i] - keyedMsg[i]);
        }
      } else {
        resArr.push(msg[i]);
      }
    }

    const res = resArr
      .reduce((acc, item) => {
        acc += alphabetNum[item] !== undefined ? alphabetNum[item] : item;
        return acc;
      }, '')
      .toUpperCase()
      .split('(=*-*=)');

    return this.type ? res.join('') : res.reverse().join('');
  };
}

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// const _0x3a46 = [
//   'random',
//   'length',
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%',
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   'floor',
// ];
// (function (_0x17e833, _0x3fc88c) {
//   const _0x5d898f = function (_0x50eaa9) {
//     while (--_0x50eaa9) {
//       _0x17e833['push'](_0x17e833['shift']());
//     }
//   };
//   _0x5d898f(++_0x3fc88c);
// })(_0x3a46, 0xa9);
// const _0x42a8 = function (_0x17e833, _0x3fc88c) {
//   _0x17e833 = _0x17e833 - 0x0;
//   let _0x5d898f = _0x3a46[_0x17e833];
//   return _0x5d898f;
// };
// const createTestString = (_0x46016b) => {
//   const _0x1a8e89 = _0x42a8('0x3');
//   let _0x450411 = '';
//   const _0x2e121f = () => {
//     const _0x4a06fa = Math['floor'](
//       Math['random']() * _0x1a8e89[_0x42a8('0x2')]
//     );
//     return _0x1a8e89[_0x4a06fa];
//   };
//   for (let _0x1ebd06 = 0x0; _0x1ebd06 < _0x46016b; _0x1ebd06 += 0x1) {
//     _0x450411 += _0x2e121f();
//   }
//   return _0x450411;
// };
// const createTestKey = (_0x349a0c) => {
//   const _0x22c5a7 = _0x42a8('0x4');
//   let _0x2079de = '';
//   const _0x452ad9 = () => {
//     const _0x13d2ac = Math[_0x42a8('0x0')](
//       Math[_0x42a8('0x1')]() * _0x22c5a7['length']
//     );
//     return _0x22c5a7[_0x13d2ac];
//   };
//   for (let _0x4e34f4 = 0x0; _0x4e34f4 < _0x349a0c; _0x4e34f4 += 0x1) {
//     _0x2079de += _0x452ad9();
//   }
//   return _0x2079de;
// };

// for (let i = 2; i < 200; i += 1) {
//   const testStr = createTestString(i);
//   const reversedTestStr = testStr.split('').reverse().join('');
//   const testKey = createTestKey(i - (i % 2));
//   const encrypted = reverseMachine.encrypt(reversedTestStr, testKey);
//   const reversedEncrypted = encrypted.split('').reverse().join('');

//   const res = reverseMachine.decrypt(reversedEncrypted, testKey);

//   console.log('--------------------------');
//   console.log(testStr);
//   console.log(res);
//   console.log(res === testStr);
//   console.log('--------------------------');
// }
