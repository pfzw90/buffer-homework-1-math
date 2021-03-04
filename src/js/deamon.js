import Magician from './magician';

export default class Deamon extends Magician {
  constructor(name, attack) {
    super(name, attack);
    this.class = 'Deamon';
  }
}
