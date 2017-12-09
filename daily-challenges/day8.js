'use strict';

let day8 = {

	registry: {},
	highestValueSeen: null,

	getAnswer1: function (input) {
		let instructions = this.formatInput(input);

		instructions.forEach( instruction => {

			let target = instruction[0];
			let operation = instruction[1];
			let value = instruction[2];
			let conditional = instruction[3]
			let part1 = instruction[4];
			let operator = instruction[5];
			let part2 = instruction[6];

			if (this.meetsCriteria(part1, operator, part2)) {
				this.performOperation(target, value, operation);
			};
		});

		return this.findLargestRegistryValue();
	},

	formatInput: function (input) {
		return input.split('\n').map(instruction => instruction.split(' '));
	},

	meetsCriteria: function (part1, operator, part2) {

		part1 = this.ensureRegistryValue(part1);
		part2 = this.ensureRegistryValue(part2);

		switch (operator) {
			case '>':
				return part1 > part2;
				break;
			case '<':
				return part1 < part2;
				break;
			case '==':
				return part1 == part2;
				break;
			case '>=':
				return part1 >= part2;
			case '<=':
				return part1 <= part2;
				break;
			case '!=':
				return part1 != part2;
				break;
		}
	},

	ensureRegistryValue(part) {
		if (isNaN(part)) {
			if (!this.registry[part]) {
				this.registry[part] = 0;
				part = 0;
			} else {
				part = this.registry[part];
			}
		}

		return part;
	},

	performOperation: function (target, value, operation) {

		if (!this.registry[target]) {
			this.registry[target] = 0;
		}

		switch (operation) {
			case 'inc':
				this.registry[target] += +value;
				break;
			case 'dec':
				this.registry[target] -= +value;
				break;
		}

		if (!this.highestValueSeen || this.registry[target] > this.highestValueSeen) {
			this.highestValueSeen = this.registry[target];
		}
	},

	findLargestRegistryValue: function () {
		let largestValue;

		Object.keys(this.registry).forEach(entry => {
			if (!largestValue || this.registry[entry] > largestValue) {
				largestValue = this.registry[entry];
			}
		});

		return largestValue;
	},

	getAnswer2: function (input) {
		return this.highestValueSeen;
	}
}

module.exports = day8;