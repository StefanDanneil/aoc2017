let day1 = {

  getAnswer1: function (input) {
    let sum = 0;

    for (var i = 0; i < input.length; i++) {


      if (i === input.length -1) {
        if (input[i] === input[0]) {
          sum += +input[i];
        }
      }

      else if (input[i] === input[i+1]) {
        sum += +input[i];
      }
    }
    return sum;
  },

  getAnswer2: function (input) {
    let sum = 0;

    let jumps = input.length / 2;

    for (var i = 0; i < input.length; i++) {

      if (i + jumps  >= input.length ) {
        let pos = (i+jumps) - (input.length);

        if (input[i] === input[pos]) {
          sum += +input[i];
        }
      }

      else if (input[i] === input[i+jumps]) {
        sum += +input[i];
      }

    }
    return sum;
  }
}

module.exports = day1;