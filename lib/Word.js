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
    this.letters.map(letter => letter.guess(guess));
    if (this.letters.find(letter => letter.character === guess)) {
        console.log("Found!");
    } else (console.log("Not found!"))
    return true;
  }

  guessedCorrectly() {
    return;
  }

}
module.exports = Word;
