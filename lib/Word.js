const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = this.getLetters(word);
  }

  getLetters(word) {
    let letters = []
    for (let i = 0; i < word.length; i++) {
        letters = [...letters, new Letter(word[i])]
    }
    return letters;
  }
}

module.exports = Word;
