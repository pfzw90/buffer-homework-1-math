export default class Character {
  constructor(name, attack) {
    this.name = name;
    this.attack = attack;
    this.attackModifier = 1;
    this.attackBonus = 0;
  }

  get getAttack() {
    return this.attack * this.attackModifier + this.attackBonus;
  }
}
