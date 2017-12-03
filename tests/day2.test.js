const day2 = require('../daily-challenges/day2');
const fs = require('fs');

let testinput1 = fs.readFileSync('tests/day2.testinput', {encoding: 'utf-8'});
let testinput2 = fs.readFileSync('tests/test-inputs/day2.testinput2', {encoding: 'utf-8'});

describe('getAnswer1', () => {

  test('test should return 18', () => {
    expect(day2.getAnswer1(testinput1)).toBe(18);
  })

});

describe('getRowDifference', () => {

  test('[5, 1, 9, 5] should return 8', () => {
    expect(day2.getRowDifference([5, 1, 9, 5])).toBe(8);
  });

  test('[7, 5, 3] should return 4', () => {
    expect(day2.getRowDifference([7, 5, 3])).toBe(4);
  });

  test('[2, 4, 6, 8] should return 6', () => {
    expect(day2.getRowDifference([2, 4, 6, 8])).toBe(6);
  });

  test('[11, 22, 33, 44, 111] should return 100', () => {
    expect(day2.getRowDifference([11, 22, 33, 44, 111])).toBe(100);
  });
});

describe('getAnswer2', () => {

  test('testinput should return ', () => {
    expect(day2.getAnswer2(testinput2)).toBe(9);
  })

});

describe('getRowEvenlyDevibleValue', () => {

  test('[5, 9, 2, 8] should return 4', () => {
    expect(day2.getRowEvenlyDevibleValue([5, 9, 2, 8])).toBe(4);
  });

  test('[9,4,7,3] should return 3', () => {
    expect(day2.getRowEvenlyDevibleValue([9,4,7,3])).toBe(3);
  });

  test('[3,8,6,5] should return 2', () => {
    expect(day2.getRowEvenlyDevibleValue([3,8,6,5])).toBe(2);
  });

});