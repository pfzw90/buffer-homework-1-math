import Character from './character';


export default class Magician extends Character {
  constructor(name, attack) {
    super(name, attack);
    this.stoned = false;
    this.class = 'Magician';
  }

  setStoned(stoned) {
    this.stoned = stoned;
  }

  get getStoned() {
    return this.stoned;
  }

  setAttack(space) {
    if (space >= 10) this.attackModifier = 0;
    else this.attackModifier -= space / 10;
    if (this.getStoned) this.attackBonus -= Math.log2(space) * 5;
  }
}
