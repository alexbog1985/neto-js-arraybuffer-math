import { Char, Magician, Daemon } from '../app.js';

describe('class Char', () => {
  const attackTestData = [
    [100, 1, false, 100],
    [100, 2, false, 90],
    [100, 2, true, 85],
    [80, 3, false, 64],
    [80, 3, true, 56]
  ];

  test.each(attackTestData)(
    'рассчет атаки: attack=%i, distance=%i, stoned=%s, ожидаемый результат %i',
    (attack, distance, stoned, expected) => {
      const char = new Char(attack);
      char.distance = distance;
      char.stoned = stoned;
      expect(char.attack).toBe(expected);
    }
  );

  const accessorsTestData = [
    [50, 75, 75],
    [100, 200, 200]
  ];

  test.each(accessorsTestData)(
    'сеттер/геттер attack: initial =%i, newValue=%i -> %i',
    (initial, newValue, expected) => {
      const char = new Char(initial);
      char.attack = newValue;
      expect(char.attack).toBe(expected);
    }
  );
});

describe('class Daemon', () => {
  const daemonTestData = [
    [100, 1, false, 100],
    [80, 4, true, 46],
  ];

  test.each(daemonTestData)(
    'наследует: attack=%i, distance=%i, stoned=%s, ожидаемый результат %i',
    function (attack, distance, stoned, expected) {
      const daemon = new Daemon(attack);
      daemon.distance = distance;
      daemon.stoned = stoned;
      expect(daemon.attack).toBe(expected);
    }
  );
});