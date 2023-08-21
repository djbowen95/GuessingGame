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

  guessLetter(guess) {
    // Checks all letters for a match.
    const match = this.letters.find((letter) => letter.character === guess);

    // Runs the .guess() method on all letters if there is a match.
    if (match) {
      this.letters.map((letter) => letter.guess(guess));
    }
    return match ? true : false;
  }

  guessedCorrectly() {
    // Checks all letters to see if any are still hidden.
    const hidden = this.letters.find((letter) => letter.visible === false);
    
    return hidden ? false : true;
  }

  getSolution() {
    return this.word;
  };

  toString() {
    return '_______';
  }
}
module.exports = Word;
