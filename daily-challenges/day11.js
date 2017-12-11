'use strict';

let day11 = {

	x: 0,
	y: 0,
	furthestTileDistance: 0,

	getAnswer1: function (input) {
		this.x = 0;
		this.y = 0;
		let instructions = this.formatInput(input);

		for (var i = 0; i < instructions.length; i++) {
			this.makeStep(instructions[i]);
		}

		return Math.abs(this.x) + Math.abs(this.y)
	},

	makeStep: function (direction) {
		switch (direction) {
			case 'n':
				this.y++;
				break;
			case 'ne':
				this.x = this.x + 0.5;
				this.y = this.y + 0.5;
				break;
			case 'se':
				this.x = this.x + 0.5;
				this.y = this.y - 0.5;
				break;
			case 's':
				this.y--;
				break;
			case 'sw':
				this.x = this.x - 0.5;
				this.y = this.y - 0.5;
				break;
			case 'nw':
				this.x = this.x - 0.5;
				this.y = this.y + 0.5;
				break;
		}
	},

	formatInput: function (input) {
		return input.split(',');
	},

	getAnswer2: function (input) {
		this.x = 0;
		this.y = 0;

		let instructions = this.formatInput(input);

		for (var i = 0; i < instructions.length; i++) {
			this.makeStep(instructions[i]);
			if (!this.furthestTileDistance
				|| this.furthestTileDistance < (Math.abs(this.x) + Math.abs(this.y))) {
				this.furthestTileDistance = (Math.abs(this.x) + Math.abs(this.y));
			}
		}

		return this.furthestTileDistance;
	}

};

module.exports = day11;