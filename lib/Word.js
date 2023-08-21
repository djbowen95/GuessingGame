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

    // Returns true if match, false if not.
    return match ? true : false;
  }

  guessedCorrectly() {
    // Checks for a hidden letter.
    const hidden = this.letters.find((letter) => letter.visible === false);
    
    // Returns false unless there are no remaining hidden letters.
    return hidden ? false : true;
  }

}
module.exports = Word;
