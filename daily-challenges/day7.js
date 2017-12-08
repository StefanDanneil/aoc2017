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

	setTotalWeightForNodeAndChildren () {
		let sum = 0;

		this.children.forEach(child => {
			sum += child.setTotalWeightForNodeAndChildren();
		});

		sum += +this.weight;
		this.totalWeight = sum;
		return sum;
	}

	findUnbalancedNode(difference = 0) {
		let oddOne;
		let seenValues = [];

		this.children.forEach(child => {
			if (!seenValues.includes(child.totalWeight)) {
				seenValues.push(child.totalWeight)
			}
		});

		if (seenValues.length > 1) {
			for (var i = 2; i < this.children.length; i++) {
				let firstChild = this.children[i-2];
				let secondChild = this.children[i-1];
				let thirdChild = this.children[i];

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
			}
		}

		if (oddOne && oddOne.children.length > 0) {
			return oddOne.findUnbalancedNode(difference);
		} else {
			this.difference = difference;
			return this;
		}

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

		rootParent.setTotalWeightForNodeAndChildren();

		let imbalancedNode = rootParent.findUnbalancedNode();

		return imbalancedNode.weight - imbalancedNode.difference;

	}

}

module.exports = day7;