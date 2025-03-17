const sum = require('../src/Validation');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(true);
});