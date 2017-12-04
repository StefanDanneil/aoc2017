const day3 = require('../daily-challenges/day3');

describe('getAnswer1', () => {

  test('input 1 should return 0', () => {
    expect(day3.getAnswer1(1)).toBe(0);
  })

  test('input 12 should return 3', () => {
      expect(day3.getAnswer1(12)).toBe(3);
  })

  test('input 23 should return 2', () => {
      expect(day3.getAnswer1(23)).toBe(2);
  }),

  test('input 1024 should return 31', () => {
      expect(day3.getAnswer1(1024)).toBe(31);
  })

});

describe('getAnswer2', () => {

  test('1 should stop after 1 insert with value value 1', () => {
      day3.getAnswer2(1);
      expect(day3.getLastInsertedValue()).toBe(1);
  });

  test('2 should stop after 3 inserts with value 2', () => {
      day3.getAnswer2(2);
      expect(day3.getLastInsertedValue()).toBe(2);
  });

  test('3 should stop after 4 inserts with value 4', () => {
      day3.getAnswer2(3);
      expect(day3.getLastInsertedValue()).toBe(4);
  });

  test('4 should stop after 4 inserts with value 4', () => {
      day3.getAnswer2(4);
      expect(day3.getLastInsertedValue()).toBe(4);
  });

  test('5 should stop after 5 inserts with value 5', () => {
      day3.getAnswer2(5);
      expect(day3.getLastInsertedValue()).toBe(5);
  });

  test('14 should stop after 8 inserts with value 23', () => {
      day3.getAnswer2(14);
      expect(day3.getLastInsertedValue()).toBe(23);
  });

  test('70 should stop after 14 inserts with value 122', () => {
      day3.getAnswer2(70);
      expect(day3.getLastInsertedValue()).toBe(122);
  });

});