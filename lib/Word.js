const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.word = word;
    this.letters = this.getLetters(word);
  }

  getLetters(word) {
    let letters = [];
    for (let i = 0; i < word.length; i++) {
      letters = [...letters, new Letter(word[i])];
    }
    return letters;
  }

  guessLetter(letter) {
    for (let i = 0; i < this.letters.length; i++) {
      let guess = this.letters[i].guess(letter);
      if (guess === true) {
        return true;
      }
    }
    return false;
  }

  guessedCorrectly() {
    return true;
  }

}
module.exports = Word;
