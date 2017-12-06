'use strict'

Array.prototype.isEqual = function (arr) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] !== arr[i]) {
			return false;
		}
	}

	return true;
}

Array.prototype.spreadValueFromIndex = function (index) {
	let value = this[index];
	let i = index;
	this[index] = 0;

	let max = 0;

	while (value !== 0) {
		i = (i === this.length - 1) ? 0 : i + 1;
		this[i] = this[i] + 1 ;
		value--;
		max++;

	}
}

let day6 = {

	getAnswer1: function (input) {
		let formattedInput = this.formatInput(input);

		let seenStates = [];

		return this.findRepetition(formattedInput);
	},

	formatInput: function (input) {
		return input.split('\t').map(item => +item);
	},

	getAnswer2: function (input) {
		let formattedInput = this.formatInput(input);

		return this.findRepetition(formattedInput, 2);
	},

	findRepetition: function (formattedInput, occurencesToFind = 1) {
		let seenStates = [];
		let result = 0;
		let foundOccurences = 0;

		while (result === 0) {
			let max;
			let maxIndex;

			max = formattedInput.reduce(function(a, b) {
			    return Math.max(a, b);
			});

			maxIndex = formattedInput.indexOf(max);

			formattedInput.spreadValueFromIndex(maxIndex);

			seenStates.forEach(arr => {

				if (formattedInput.isEqual(arr) ) {
					foundOccurences++;

					if (foundOccurences === occurencesToFind) {
						result = seenStates.length +1 - (occurencesToFind-1);
					}

					seenStates = [];

				}
			});

			seenStates.push(formattedInput.slice());
		}

		return result;
	}



}

module.exports = day6;