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
    const match = this.letters.find(letter => letter.character === guess);
    
    if (match) {
        this.letters.map(letter => letter.guess(guess));
        return true;
    } else {
        return false
    }
  }

  guessedCorrectly() {
    return;
  }

}
module.exports = Word;
