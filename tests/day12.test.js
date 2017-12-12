const day12 = require('../daily-challenges/day12');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day12.testinput',
  {encoding: 'utf-8'});


describe('getAnswer1', () => {

  test('with testinput 6 programs should be connected to 0', () => {
    expect(day12.getAnswer1(testinput)).toBe(6);
  })

});

describe('getAnswer2', () => {

  test('with testinput it should be a total of 2 groups', () => {
    expect(day12.getAnswer2(testinput)).toBe(2);
  })

});
