'use strict'

class day5 {

	constructor(input) {
		this.input = input
		this.resetMaze()
	}

	formatInput(input) {
		return input.split('\n').map(item => {return +item})
	}

	getAnswer1 () {

		let i = 0

		while (true) {
			if (this.currentPosition < 0 || this.currentPosition >= this.mazeLength) {
				let jumps = this.jumps
				this.resetMaze()
				return jumps
			}

			this.jump()
			i++
		}
	}

	resetMaze () {
		this.maze = this.formatInput(this.input)
		this.mazeLength = this.maze.length
		this.currentPosition = 0
		this.jumps = 0
	}

	jump (decreaseOnHighOffsets) {

		let pos = this.maze[this.currentPosition]

		if ( pos === 0 ) {
			this.maze[this.currentPosition]++
		} else if (pos >= 3 && decreaseOnHighOffsets) {
			this.maze[this.currentPosition] = this.maze[this.currentPosition] - 1
			this.currentPosition += pos
		}else {
			this.maze[this.currentPosition]++
			this.currentPosition += pos
		}

		this.jumps++;
	}

	getAnswer2 () {
		while (true) {

			if (this.currentPosition < 0 || this.currentPosition >= this.mazeLength) {
				let jumps = this.jumps
				this.resetMaze()
				return jumps
			}

			this.jump(true);
		}
	}
}

module.exports = day5