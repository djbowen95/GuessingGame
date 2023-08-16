class Letter {
  constructor(character) {
    this.character = character;
    this.visible = false;
  }

  guess(guess) {
    if (guess === this.character) {
        this.visible = true;
    };
  }

  toString() {
    return this.character;
  }
}

module.exports = Letter;
