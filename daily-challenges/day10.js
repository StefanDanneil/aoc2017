'use strict';

let day10 = {

	skipSize: 0,
	currentPosition: 0,
	sequence: null,

	getAnswer1: function (positionCount, input) {
		this.sequence = this.formatInput(input);
		this.currentPosition = 0;
		this.skipSize = 0;

		let positions = [];

		for (var i = 0; i < positionCount; i++) {
			positions.push(i);
		}

		positions = this.makeRound(positions);

		return positions[0] * positions[1];
	},

	formatInput: function (input) {
		return input.split(',').map( i => +i);
	},

	makeRound: function (positions) {

		for (var i = 0; i < this.sequence.length; i++) {
			let currentLength = this.sequence[i];
			positions = this.reverseSelection(positions, currentLength);
			this.move(currentLength, positions.length);
		}

		return positions;
	},

	reverseSelection: function (positions, currentLength) {
		let selection = [];

		for (var i = 0; i < currentLength; i++) {
			let index = (this.currentPosition + i) % positions.length;
			selection.push(positions[index]);
		}

		selection = selection.reverse();

		for (var i = 0; i < selection.length; i++) {

			let target = (this.currentPosition + i) % positions.length;

			positions[target] = selection[i];

		}

		return positions;
	},

	move: function (currentLength, max) {
		let jumps = currentLength + this.skipSize;
		this.currentPosition = (jumps + this.currentPosition) % max;
		this.skipSize++;
	},

	getAnswer2: function (input) {
		this.currentPosition = 0;
		this.skipSize = 0;
		this.sequence = this.getSequenceFromInput(input)
		let sparseHash = this.getSparseHash();
		let denseHash = this.getDenseHash(sparseHash);

		return this.convertDenseHashToAscii(denseHash);
	},

	getSequenceFromInput: function (input) {
		let sequence = [];

		for (var i = 0; i < input.length; i++) {
			sequence.push(input.charCodeAt(i));
		}

		sequence = sequence.concat([17, 31, 73, 47, 23]);

		return sequence;
	},

	getSparseHash: function () {
		let byteArray = [];

		for (var i = 0; i < 256; i++) {
			byteArray.push(i);
		}

		for (var i = 0; i < 64; i++) {
			byteArray = this.makeRound(byteArray);
		}

		return byteArray;
	},

	getDenseHash: function (byteArray) {

		let denseHash = [];

		for (var i = 0; i < byteArray.length; i = i + 16) {
			let b = null;

			for (var j = 0; j < 16; j++) {
				b = (b) ? b ^ byteArray[j+i] : byteArray[j+i];
			}

			denseHash.push(b)
		}

		return denseHash;
	},

	convertDenseHashToAscii: function (denseHash) {
		let output = "";

		for (var i = 0; i < denseHash.length; i++) {
			let letter = denseHash[i].toString(16);
			letter = letter.length < 2 ? '0' + letter : letter;
			output += letter;
		}

		return output;
	}
}

module.exports = day10;