const day11 = require('../daily-challenges/day11');

describe('getAnswer1', () => {

  test('"ne,ne,ne" should return 3', () => {
    expect(day11.getAnswer1('ne,ne,ne')).toBe(3);
  })

  test('"ne,ne,sw,sw" should return 0', () => {
    expect(day11.getAnswer1('ne,ne,sw,sw')).toBe(0);
  })

  test('"ne,ne,s,s" should return 2', () => {
    expect(day11.getAnswer1('ne,ne,s,s')).toBe(2);
  })

  test('"se,sw,se,sw,sw" should return 3', () => {
    expect(day11.getAnswer1('se,sw,se,sw,sw')).toBe(3);
  })

});