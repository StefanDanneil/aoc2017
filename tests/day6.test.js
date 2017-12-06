const day6 = require('../daily-challenges/day6');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day6.testinput',
  {encoding: 'utf-8'});


describe('getAnswer1', () => {

  test('with testinput it should return 5', () => {
    expect(day6.getAnswer1(testinput)).toBe(5);
  })

});

describe('getAnswer2', () => {

  test('with testinput it should return 4', () => {
    expect(day6.getAnswer2(testinput)).toBe(4);
  })

});
