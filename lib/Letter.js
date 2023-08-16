class Letter {
  constructor(character) {
    this.character = character;
    this.visible = false;
  }

  guess() {
    this.visible = true;
  }
}

module.exports = Letter;
