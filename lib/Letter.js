class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !this.isAlphaNumeric(character);
  }

  isAlphaNumeric(input) {
    return /[a-zA-Z0-9]/.test(input);
  }

  guess(guess) {
    if (guess === this.character) {
      this.visible = true;
    }
    return this.visible;
  }

  toString() {
    return this.visible ? this.character : "_";
  }

  getSolution() {
    return this.character;
  }
}

module.exports = Letter;
