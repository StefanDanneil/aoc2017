'use strict'

const fs = require('fs');
const day1 = require('./daily-challenges/day1');
const day2 = require('./daily-challenges/day2');

let day1Input = fs.readFileSync('inputs/day1', {encoding: 'utf-8'});
let day2Input = fs.readFileSync('inputs/day2', {encoding: 'utf-8'});

console.log('day 1 answer 1 = ', day1.getAnswer1(day1Input));
console.log('day 1 answer 2 = ', day1.getAnswer2(day1Input));
console.log('day 2 answer 1 = ', day2.getAnswer1(day2Input));
console.log('day 2 answer 2 = ', day2.getAnswer2(day2Input));