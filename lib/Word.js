const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [new Letter("h")];
  }
}

module.exports = Word;
