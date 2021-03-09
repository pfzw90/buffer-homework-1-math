import Deamon from '../deamon';
import Magician from '../magician';

test('magician Merlin stoned', () => {
  const merlin = new Magician('Merlin');
  merlin.attack = 100;
  merlin.space = 2;
  merlin.stoned = true;
  expect(merlin.attack).toBe(85);
});

test('deamon Belphegor not stoned', () => {
  const belphegor = new Deamon('Belphegor');
  belphegor.attack = 100;
  belphegor.space = 2;
  belphegor.stoned = false;
  expect(belphegor.attack).toBe(90);
});

test('magician Rincewind 2far', () => {
  const rincewind = new Magician('Rincewind');
  rincewind.attack = 100;
  rincewind.space = 11;
  expect(rincewind.attack).toBe(0);
});
