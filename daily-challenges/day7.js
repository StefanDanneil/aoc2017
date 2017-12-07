'use strict';

class Tree {

	constructor (input) {
		this.buildTree(input);
		this.lastInsertedProgram;
	}

	formatInput (input) {
		return input.split('\n');
	}

	buildTree (input) {
		let formattedInput = this.formatInput(input);
		let program;

		formattedInput.forEach( input => {
			let parts = input.split(' ');
			let name = parts[0];
			let weight = parts[1].replace(/\(|\)/g,'');

			if (this[parts[0]]) {
				program = this[parts[0]];
				program.weight = weight;
			} else {
				program = new Program(name, weight);
			}

			if (parts.length > 2) {

				let childNames = input.substr(input.indexOf('->')+2).split(',').map(item => item.trim());

				childNames.forEach(childName => {
					if (this[childName]) {
						let child = this[childName];
						child.addParent(program);
						program.addChild(child);
					} else {
						let child = new Program(childName);
						child.addParent(program);
						program.addChild(child);
						this[child.name] = child;
					}
				})
			}

			this[program.name] = program;
			this.lastInsertedProgram = program;
		});
	}
}

class Program {

	constructor (name, weight) {
		this.name = name;
		this.weight = weight;
		this.children = [];
		this.parent = null;
	}

	addParent (parent) {
		this.parent = parent;
	}

	addChild (child) {
		this.children.push(child);
	}

	findRootParent () {
		if (this.parent === null) {
			return this;
		}

		return this.parent.findRootParent();
	}

	findTotalWeightForNode () {
		let sum = 0;

		this.children.forEach(child => {
			sum += child.findTotalWeightForNode();
		});

		sum += +this.weight;
		return sum;
	}
}

let day7 = {

	getAnswer1: function (input) {
		let tree = new Tree(input);

		return tree.lastInsertedProgram.findRootParent().name;
	},

	getAnswer2: function (input) {
		let tree = new Tree(input);

		let rootParent = tree.lastInsertedProgram.findRootParent();

		rootParent.children.forEach(child => child.totalWeight = child.findTotalWeightForNode());
		let oddOne;
		let difference = 0;

		for (var i = 2; i < rootParent.children.length; i++) {
			let firstChild = rootParent.children[i-2];
			let secondChild = rootParent.children[i-1];
			let thirdChild = rootParent.children[i];

			if (firstChild.totalWeight === secondChild.totalWeight) {
				oddOne = thirdChild;
				difference = oddOne.totalWeight - firstChild.totalWeight;
			} else if (secondChild.totalWeight === thirdChild.totalWeight) {
				oddOne = firstChild;
				difference = oddOne.totalWeight - secondChild.totalWeight;
			} else if (firstChild.totalWeight === thirdChild.totalWeight) {
				oddOne = secondChild;
				difference = oddOne.totalWeight - firstChild.totalWeight;
			}

		};

		return oddOne.weight - difference;
	}

}

module.exports = day7;