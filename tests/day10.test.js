const day10 = require('../daily-challenges/day10');
const fs = require('fs');

describe('getAnswer1', () => {

  test('with testinput it should return 12', () => {
    expect(day10.getAnswer1(5, '3,4,1,5')).toBe(12);
  });

});

describe('getAnswer2', () => {

  test('with testinput it should return 3', () => {
    expect(day10.getAnswer2('')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
  })

  test('with testinput it should return 3', () => {
    expect(day10.getAnswer2('AoC 2017')).toBe('33efeb34ea91902bb2f59c9920caa6cd');
  })

  test('with testinput it should return 3', () => {
    expect(day10.getAnswer2('1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
  })

  test('with testinput it should return 3', () => {
    expect(day10.getAnswer2('1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
  })

});

describe('getDenseHash', () => {
  test('[65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22] should return [64]', () => {
    expect(day10.getDenseHash([65, 27, 9, 1, 4, 3, 40, 50, 91, 7, 6, 0, 2, 5, 68, 22])).toEqual([64]);
  });
});

describe('convertDenseHashToAscii', () => {
  test('[64, 7, 255] should return 4007ff', () => {
    expect(day10.convertDenseHashToAscii([64, 7, 255])).toBe('4007ff');
  })
})

describe('getSequenceFromInput', () => {
  test(' "1,2,3" should return [49,44,50,44,51,17,31,73,47,23]', () => {
    expect(day10.getSequenceFromInput("1,2,3")).toEqual([49,44,50,44,51,17,31,73,47,23]);
  })
})