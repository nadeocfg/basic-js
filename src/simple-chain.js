import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  state: {
    chain: [],
  },

  getLength() {
    return this.state.chain.length;
  },
  addLink(value = '') {
    this.state.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !position ||
      this.state.chain[position - 1] === undefined ||
      typeof position !== 'number' ||
      position % 1 !== 0
    ) {
      this.state.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.state.chain = this.state.chain.filter(
      (item, index) => index !== position - 1
    );
    return this;
  },
  reverseChain() {
    this.state.chain = this.state.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.state.chain.join('~~');
    this.state.chain = [];
    return res;
  },
};

export default chainMaker;
