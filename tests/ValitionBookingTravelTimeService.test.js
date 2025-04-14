const IsValidateSelectedYear = require('../src/Validation');

test('validate that selected year is in the not restrict period', () => {
  expect(IsValidate(2015)).toBe(true);
});

test('validate that selected year is in the not restrict period', () => {
  expect(IsValidateSelectedYear(2015)).toBe(true);
  expect(IsValidateSelectedYear(2015)).toBe(true);
  expect(IsValidateSelectedYear(2015)).toBe(true);
  expect(IsValidateSelectedYear(2015)).toBe(true);
});