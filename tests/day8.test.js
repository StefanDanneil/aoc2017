const day8 = require('../daily-challenges/day8');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day8.testinput',
  {encoding: 'utf-8'});


describe('getAnswer1', () => {

  test('with testinput it should return 1', () => {
    expect(day8.getAnswer1(testinput)).toBe(1);
  })

});

describe('getAnswer2', () => {

  test('with testinput it should return 10', () => {
    expect(day8.getAnswer2(testinput)).toBe(10);
  })

});
