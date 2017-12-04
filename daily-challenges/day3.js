'use strict'

let day3 = {

	grid: {
		x: 0,
		y: 0,
		xMax: 0,
		yMax: 0,

		values: [],

		assignValue: function(value) {
			this.values.push({value: value, x: this.x, y: this.y});
			this.setNextPosition();
		},

		setNextPosition: function () {
			if ( this.x === 0 && this.y === 0) {
				this.x++;

				if (this.x > this.xMax) {
					this.xMax++;
				}

			} else if (this.x > this.y && this.x === this.xMax && this.x !== -this.y) {
				this.y++;
				if (this.y > this.yMax) {
					this.yMax++;
				}
			} else if (this.y >= this.x && this.y === this.yMax && -this.x < this.xMax) {
				this.x--;
			} else if (-this.x >= this.y && -this.y < this.yMax) {
				this.y--;
			} else {
				this.x++;
				if (this.x > this.xMax) {
					this.xMax++;
				}
			}
		},

		getAdjacentSumForCurrentPosition() {
			if (this.x === 0 && this.y === 0) {
				return 1;
			} else {
				let sum = 0;

				for (var i = -1; i < 2; i++) {
					for (var j = -1; j < 2; j++) {
						if (i !== this.x || j !== this.y) {


							let adjacentPosition = this.values.find( item => {
								return item.x === this.x + i && item.y === this.y + j
							});


							if (adjacentPosition) {
								sum += adjacentPosition.value;
							}

						}
					}
				}

				return sum;
			}
		},

		clear() {
			this.x = 0;
			this.y = 0;
			this.xMax = 0;
			this.yMax = 0;
			this.values = [];
		}
	},

	buildGrowingGrid: function (input) {
		this.grid.clear();
	},

	getLastInsertedValue() {
		return this.grid.values[this.grid.values.length -1 ].value;
	},

	getAnswer1: function (input) {
		this.grid.clear();

		for (var i = 1; i <= input; i++) {
			this.grid.assignValue(i);
		}

		let dataPoint = this.grid.values.filter(item => {
			return item.value === input;
		})[0];

		return Math.abs(dataPoint.x) + Math.abs(dataPoint.y);
	},

	getAnswer2: function (input) {
		this.grid.clear();

		let lastInsertedValue = 0;

		while (lastInsertedValue < input) {
			this.grid.assignValue(this.grid.getAdjacentSumForCurrentPosition());
			lastInsertedValue = this.getLastInsertedValue();
		}

		return lastInsertedValue;
	}
}

module.exports = day3;