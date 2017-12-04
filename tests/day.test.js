const day1 = require('../daily-challenges/day1');

describe('getAnswer1', () => {

  test('input 1122 should return 3', () => {
    expect(day1.getAnswer1('1122')).toBe(3);
  }),

  test('input 1111 should return 4', () => {
      expect(day1.getAnswer1('1111')).toBe(4);
  }),

  test('input 1234 should return 0', () => {
      expect(day1.getAnswer1('1234')).toBe(0);
  }),

  test('input 91212129 should return 9', () => {
      expect(day1.getAnswer1('91212129')).toBe(9);
  })

});

describe('getAnswer2', () => {

  test('input 1212 should return 6', () => {
    expect(day1.getAnswer2('1212')).toBe(6);
  }),

  test('input 1221 should return 0', () => {
      expect(day1.getAnswer2('1221')).toBe(0);
  }),

  test('input 123425 should return 4', () => {
      expect(day1.getAnswer2('123425')).toBe(4);
  }),

  test('input 123123 should return 12', () => {
      expect(day1.getAnswer2('123123')).toBe(12);
  })

  test('input 12131415 should return 4', () => {
      expect(day1.getAnswer2('12131415')).toBe(4);
  })

});