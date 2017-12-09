const day9 = require('../daily-challenges/day9');
const fs = require('fs');

describe('getAnswer1', () => {

  test('input {} it should return 1', () => {
    expect(day9.getAnswer1('{}')).toBe(1);
  })

  test('input {{{}}} it should return 6', () => {
    expect(day9.getAnswer1('{{{}}}')).toBe(6);
  })

  test('input {{},{}} it should return 5', () => {
    expect(day9.getAnswer1('{{},{}}')).toBe(5);
  })

  test('input {{{},{},{{}}}} it should return 16', () => {
    expect(day9.getAnswer1('{{{},{},{{}}}}')).toBe(16);
  })

  test('input {<a>,<a>,<a>,<a>} it should return 1', () => {
    expect(day9.getAnswer1('{<a>,<a>,<a>,<a>}')).toBe(1);
  })

  test('input {{<ab>},{<ab>},{<ab>},{<ab>}} it should return 9', () => {
    expect(day9.getAnswer1('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9);
  })

  test('input {{<!!>},{<!!>},{<!!>},{<!!>}} it should return 9', () => {
    expect(day9.getAnswer1('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
  })

  test('input {{<a!>},{<a!>},{<a!>},{<ab>}} it should return 3', () => {
    expect(day9.getAnswer1('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
  })
});

describe('getAnswer2', () => {

  test('input <> should return 0', () => {
    expect(day9.getAnswer2('<>')).toBe(0);
  })

  test('input <random characters> should return 17', () => {
    expect(day9.getAnswer2('<random characters>')).toBe(17);
  })

  test('input <<<<> should return 3', () => {
    expect(day9.getAnswer2('<<<<>')).toBe(3);
  })

  test('input <{!>}> should return 2', () => {
    expect(day9.getAnswer2('<{!>}>')).toBe(2);
  })

  test('input <!!> should return 0', () => {
    expect(day9.getAnswer2('<!!>')).toBe(0);
  })

  test('input <!!!>> should return 0', () => {
    expect(day9.getAnswer2('<!!!>>')).toBe(0);
  })

  test('input <{o"i!a,<{i<a> should return 10', () => {
    expect(day9.getAnswer2('<{o"i!a,<{i<a>')).toBe(10);
  })

});
