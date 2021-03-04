import Deamon from '../deamon';
import Magician from '../magician';

test('test Deamon 3 cells', () => {
  const testChar = new Deamon('ivan', 100);
  testChar.setAttack(3);
  expect(testChar.getAttack).toBe(70);
});

test('test Deamon > 10 cells', () => {
  const testChar = new Deamon('boris', 999);
  testChar.setAttack(11);
  expect(testChar.getAttack).toBe(0);
});

test('test stoned Magician', () => {
  const testChar = new Magician('babayaga', 1000);
  testChar.setStoned(true);
  testChar.setAttack(4);
  expect(testChar.getAttack).toBe(590);
});
