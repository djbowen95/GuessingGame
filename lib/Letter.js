class Letter {
  constructor(character) {
    this.character = character;
    if (this.isAlphanumeric(character)) {
        this.visible = false;
    } else {
        this.visible = true;
    }
  }

  guess(guess) {
    if (guess === this.character) {
        this.visible = true;
    };
  }

  toString() {
    return this.character;
  }

  isAlphanumeric(input) {
    return (/[a-zA-Z0-9]/).test(input);
  }
}

module.exports = Letter;
