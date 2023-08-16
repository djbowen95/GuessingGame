class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !this.isAlphanumeric(character);
  }

  guess(guess) {
    if (guess === this.character) {
        this.visible = true;
    };
  }

  toString() {
    if (this.visible) {
        return this.character;
    } else {
        return '_';
    }
  }

  isAlphanumeric(input) {
    return (/[a-zA-Z0-9]/).test(input);
  }
}

module.exports = Letter;
