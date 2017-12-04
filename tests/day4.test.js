const day4 = require('../daily-challenges/day4');
const fs = require('fs');

let testinput1 = fs.readFileSync('tests/test-inputs/day4.testinput', {encoding: 'utf-8'});
let testinput2 = fs.readFileSync('tests/test-inputs/day4.testinput2', {encoding: 'utf-8'});

describe('getAnswer1', () => {

  test('with testinput it should return 2', () => {
    expect(day4.getAnswer1(testinput1)).toBe(2);
  })

});

describe('isPasswordValid', () => {

  test('[aa bb cc dd ee] should return true', () => {
    expect(day4.isPasswordValid(['aa', 'bb', 'cc', 'dd', 'ee'])).toBe(true);
  });

  test('[aa bb cc dd aa] should return false', () => {
    expect(day4.isPasswordValid(['aa', 'bb', 'cc', 'dd', 'aa'])).toBe(false);
  });

  test('[aa bb cc dd aaa] should return true', () => {
    expect(day4.isPasswordValid(['aa', 'bb', 'cc', 'dd', 'aaa'])).toBe(true);
  });

});

describe('getAnswer2', () => {

  test('with testinput it should return 3', () => {
    expect(day4.getAnswer2(testinput2)).toBe(3);
  })

});
