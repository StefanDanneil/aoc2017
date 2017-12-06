const day5 = require('../daily-challenges/day5');
const fs = require('fs');

let testinput = fs.readFileSync(
  'tests/test-inputs/day5.testinput',
  {encoding: 'utf-8'});


describe('jump(false)', () => {

  test('if it receives a 0 it should move stand still and increase to 1', () => {
    let day = new day5('0')
    day.jump()
    expect(day.currentPosition).toBe(0);
    expect(day.maze[0]).toBe(1);
  })

  test('if it recieves a 3 with it should move forward 3 and increase to 4', () => {
    let day = new day5('3')
    day.jump()
    expect(day.currentPosition).toBe(3);
    expect(day.maze[0]).toBe(4);
  })

});

describe('jump(true)', () => {

  test('if it receives a 0 it should move stand still and increase to 1', () => {
    let day = new day5('0')
    day.jump()
    expect(day.currentPosition).toBe(0);
    expect(day.maze[0]).toBe(1);
  })

  test('if it recieves a 3 with it should move forward 3 and decrease to 2', () => {
    let day = new day5('3')
    day.jump(true)
    expect(day.currentPosition).toBe(3);
    expect(day.maze[0]).toBe(2);
    expect(day.jumps).toBe(1);
  })

});

describe('getAnswer2', () => {

  test('with testinput it should return 10', () => {
    expect(new day5(testinput).getAnswer2()).toBe(10);
  })

});
