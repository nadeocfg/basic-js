import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const res = [];
  const duplicates = [];

  for (let i = 0; i < names.length; i += 1) {
    if (res.includes(names[i])) {
      duplicates.push(names[i]);
      res.push(
        names[i] + `(${duplicates.filter((item) => item === names[i]).length})`
      );
    } else {
      res.push(names[i]);
    }
  }

  return res;
}
