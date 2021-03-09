/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Character from './character';

export default class MathChar extends Character {
  set attack(atk) {
    this._attack = atk;
  }

  set stoned(stoned) {
    this._stoned = stoned;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    if (this.space >= 11) return 0;
    return Math.round(this._attack * (1 - (this.space - 1) / 10)
                - Number(this.stoned) * Math.log2(this.space) * 5);
  }
}
