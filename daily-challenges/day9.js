'use strict';

let day9 = {

	getAnswer1: function (input) {
		return this.traverseInput(input);
	},

	traverseInput: function (input, returnGarbage = false) {
		let sum = 0;
		let nestValue = 0;
		let garbage = false;
		let garbageSum = 0;

		for (var i = 0; i < input.length; i++) {

			if (input[i] === '<' && !garbage) {
				garbage = true;
			} else if (input[i] === '>') {
				garbage =false;
			} else if (input[i] === '{' && !garbage) {
				nestValue++;
			} else if (input[i] === '}' && !garbage) {
				sum += nestValue;
				nestValue--;
			} else if (input[i] === '!') {
				i++;
			} else if (garbage) {
				garbageSum++;
			}
		}

		return returnGarbage ? garbageSum : sum;
	},

	getAnswer2: function (input) {
		return this.traverseInput(input, true);
	}
}

module.exports = day9;