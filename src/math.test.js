const math = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(math.add(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(math.subtract(1, 2)).toBe(-1);
});