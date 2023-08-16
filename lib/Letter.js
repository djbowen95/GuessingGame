class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !this.isAlphaNumeric(character);
  }
  
  toString() {
    return this.visible ? this.character : "_";
  }

  guess(guess) {
    if (guess === this.character) {
      this.visible = true;
    };
    return this.visible;
  }

  isAlphaNumeric(input) {
    return /[a-zA-Z0-9]/.test(input);
  }
  
  getSolution() {
    return this.character;
  }
}

module.exports = Letter;
