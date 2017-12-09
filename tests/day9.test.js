const day9 = require('../daily-challenges/day9');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day9.testinput',
  {encoding: 'utf-8'});


describe('getAnswer1', () => {

  test('with testinput it should return 1', () => {
    expect(day9.getAnswer1(testinput)).toBe(1);
  })

});

// describe('getAnswer2', () => {

//   test('with testinput it should return 10', () => {
//     expect(day9.getAnswer2(testinput)).toBe(10);
//   })

// });
