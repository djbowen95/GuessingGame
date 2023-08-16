class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !this.isAlphaNumeric(character);
  }

  guess(guess) {
    if (guess === this.character) {
      this.visible = true;
    };
    return this.visible;
  }

  toString() {
    if (this.visible) {
      return this.character;
    } else {
      return "_";
    }
  }

  isAlphaNumeric(input) {
    return /[a-zA-Z0-9]/.test(input);
  }

  getSolution() {
    return this.character;
  }
}

module.exports = Letter;
