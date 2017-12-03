'use strict'

let day2 = {

	formatInput: function(input) {
		let rows = input.split('\n');

		let formattedRows = rows.map((row) => {

			row = row.split('\t');

			row = row.map(val => {
				return +val; //make sure it's a number
			})

			return row;
		});

		return formattedRows;
	},

	getAnswer1: function (input) {
		let sum = 0;
		input = this.formatInput(input);
		for (var i = 0; i < input.length; i++) {
			sum += this.getRowDifference(input[i]);
		}

		return sum;
	},

	getRowDifference: function(row) {
		let arr = row.sort((a,b) => { return a - b; });
		return +(arr[arr.length-1] - arr[0]);
	},

	getAnswer2: function (input) {
		let sum = 0;
		input = this.formatInput(input);

		for (var i = 0; i < input.length; i++) {
			sum += this.getRowEvenlyDevibleValue(input[i]);
		}

		return sum
	},

	getRowEvenlyDevibleValue: function (row) {
		for (var i = 0; i < row.length; i++) {
			let val = row[i];

			let evenlyDevisor = row.find(item => {
				return (item % val === 0 && item !== val);
			});

			if (evenlyDevisor) {
				return evenlyDevisor / val;
			}
		}
	}
}

module.exports = day2;

