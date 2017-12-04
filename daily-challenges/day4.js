let day4 = {

  getAnswer1: function (input) {
    let amountOfValidPasswords = 0;
    input = this.formatInput(input);

    for (var i = 0; i < input.length; i++) {
      if (this.isPasswordValid(input[i])) {
        amountOfValidPasswords++;
      }
    }

    return amountOfValidPasswords;
  },

  formatInput: function (input) {

    input = input.split('\n').map(item => {
      return item.split(' ');
    })

    return input;
  },

  isPasswordValid: function(password, anagramsNotAllowed) {
    let wordHash = {};

    if (anagramsNotAllowed) {
      password = password.map(item => {
        item = item.split('');
        item = item.sort();
        return item.join('');;
      });
    }

    for (var i = 0; i < password.length; i++) {

      if ( wordHash[ password[i] ] ) {
        return false;
      } else {
        wordHash[ password[i] ] = password[i];
      }

    }

    return true;

  },

  getAnswer2: function (input) {
     let amountOfValidPassphrases = 0;
    input = this.formatInput(input);

    for (var i = 0; i < input.length; i++) {
      if (this.isPasswordValid(input[i], true)) {
        amountOfValidPassphrases++;
      }
    }

    return amountOfValidPassphrases;
  }
}

module.exports = day4;