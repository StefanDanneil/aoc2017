'use strict'

const fs = require('fs');
const day1 = require('./daily-challenges/day1');
const day2 = require('./daily-challenges/day2');
const day3 = require('./daily-challenges/day3');
const day4 = require('./daily-challenges/day4');

let day1Input = fs.readFileSync('inputs/day1', {encoding: 'utf-8'});
let day2Input = fs.readFileSync('inputs/day2', {encoding: 'utf-8'});
let day3Input = 325489;
let day4Input = fs.readFileSync('inputs/day4', {encoding: 'utf-8'});


console.log('day 1 answer 1 = ', day1.getAnswer1(day1Input));
console.log('day 1 answer 2 = ', day1.getAnswer2(day1Input));
console.log('day 2 answer 1 = ', day2.getAnswer1(day2Input));
console.log('day 2 answer 2 = ', day2.getAnswer2(day2Input));
console.log('day 3 answer 1 = ', day3.getAnswer1(day3Input));
console.log('day 3 answer 2 = ', day3.getAnswer2(day3Input));
console.log('day 4 answer 1 = ', day4.getAnswer1(day4Input));
console.log('day 4 answer 2 = ', day4.getAnswer2(day4Input));