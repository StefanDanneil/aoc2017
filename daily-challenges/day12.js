'use strict';

let day12 = {

	programs: {},
	group: [],
	groups: [],

	formatInput: function (input) {
		return input.split('\n');
	},

	getCleanSlate: function () {
		this.programs = {};
		this.group = [];
		this.groups = [];
	},

	getAnswer1: function (input) {
		let instructions = this.formatInput(input);

		instructions.forEach(instruction => {
			this.setupConnections(instruction);
		});

		this.findAllPossibleRoutesForId(0);
		return this.group.length;
	},

	setupConnections: function (instruction) {
		let id = +instruction.split(' ')[0];
		let possibleRoutes = instruction.split('<->')[1].split(',').map(route => +route.trim());

		this.programs[id] = possibleRoutes;
	},

	findAllPossibleRoutesForId: function (id) {

		if (!this.group.includes(id)) {
			this.group.push(id);
			this.programs[id].forEach(id => {
				this.findAllPossibleRoutesForId(id);
			});
		}

	},

	getAnswer2: function (input) {
		let instructions = this.formatInput(input);

		instructions.forEach(instruction => {
			this.setupConnections(instruction);
		});

		Object.keys(this.programs).forEach(id => {
			let includedInGroup = false;

			for (var i = 0; i < this.groups.length; i++) {
				if (this.groups[i].includes(+id)) {
					includedInGroup = true;
				}
			}

			if (!includedInGroup) {
				this.findAllPossibleRoutesForId(+id);
				this.groups.push(this.group.slice());
				this.group = [];
			}
		});

		return this.groups.length;
	}
};

module.exports = day12;


// 0 <-> 2
// 1 <-> 1
// 2 <-> 0, 3, 4
// 3 <-> 2, 4
// 4 <-> 2, 3, 6
// 5 <-> 6
// 6 <-> 4, 5