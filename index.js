'use strict'

const fs = require('fs');
const day1 = require('./daily-challenges/day1');
const day2 = require('./daily-challenges/day2');
const day3 = require('./daily-challenges/day3');
const day4 = require('./daily-challenges/day4');
const Day5 = require('./daily-challenges/day5');
const day6 = require('./daily-challenges/day6');
const day7 = require('./daily-challenges/day7');
const day8 = require('./daily-challenges/day8');
const day9 = require('./daily-challenges/day9');
const day10 = require('./daily-challenges/day10');
const day11 = require('./daily-challenges/day11');
const day12 = require('./daily-challenges/day12');

let day1Input = fs.readFileSync('inputs/day1', {encoding: 'utf-8'});
let day2Input = fs.readFileSync('inputs/day2', {encoding: 'utf-8'});
let day3Input = 325489;
let day4Input = fs.readFileSync('inputs/day4', {encoding: 'utf-8'});
let day5Input = fs.readFileSync('inputs/day5', {encoding: 'utf-8'});
let day6Input = fs.readFileSync('inputs/day6', {encoding: 'utf-8'});
let day7Input = fs.readFileSync('inputs/day7', {encoding: 'utf-8'});
let day8Input = fs.readFileSync('inputs/day8', {encoding: 'utf-8'});
let day9Input = fs.readFileSync('inputs/day9', {encoding: 'utf-8'});
let day10Input = fs.readFileSync('inputs/day10', {encoding: 'utf-8'});
let day11Input = fs.readFileSync('inputs/day11', {encoding: 'utf-8'});
let day12Input = fs.readFileSync('inputs/day12', {encoding: 'utf-8'});

let day5 = new Day5(day5Input);

console.log('day 1 answer 1 = ', day1.getAnswer1(day1Input));
console.log('day 1 answer 2 = ', day1.getAnswer2(day1Input));
console.log('day 2 answer 1 = ', day2.getAnswer1(day2Input));
console.log('day 2 answer 2 = ', day2.getAnswer2(day2Input));
console.log('day 3 answer 1 = ', day3.getAnswer1(day3Input));
console.log('day 3 answer 2 = ', day3.getAnswer2(day3Input));
console.log('day 4 answer 1 = ', day4.getAnswer1(day4Input));
console.log('day 4 answer 2 = ', day4.getAnswer2(day4Input));
console.log('day 5 answer 1 = ', day5.getAnswer1());
console.log('day 5 answer 2 = ', day5.getAnswer2());
console.log('day 6 answer 1 = ', day6.getAnswer1(day6Input));
console.log('day 6 answer 2 = ', day6.getAnswer2(day6Input));
console.log('day 7 answer 1 = ', day7.getAnswer1(day7Input));
console.log('day 7 answer 2 = ', day7.getAnswer2(day7Input));
console.log('day 8 answer 1 = ', day8.getAnswer1(day8Input));
console.log('day 8 answer 2 = ', day8.getAnswer2(day8Input));
console.log('day 9 answer 1 = ', day9.getAnswer1(day9Input));
console.log('day 9 answer 2 = ', day9.getAnswer2(day9Input));
console.log('day 10 answer 1 = ', day10.getAnswer1(256, day10Input));
console.log('day 10 answer 2 = ', day10.getAnswer2(day10Input));
console.log('day 11 answer 1 = ', day11.getAnswer1(day11Input));
console.log('day 11 answer 2 = ', day11.getAnswer2(day11Input));
console.log('day 12 answer 1 = ', day12.getAnswer1(day12Input));
console.log('day 12 answer 2 = ', day12.getAnswer2(day12Input));