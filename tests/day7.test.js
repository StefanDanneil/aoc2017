const day7 = require('../daily-challenges/day7');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day7.testinput',
  {encoding: 'utf-8'});


describe('getAnswer1', () => {

  test('with testinput it should return 5', () => {
    expect(day7.getAnswer1(testinput)).toBe('tknk');
  })

});

describe('getAnswer2', () => {

  test('with testinput it should return 60', () => {
    expect(day7.getAnswer2(testinput)).toBe(103);
  })

});
