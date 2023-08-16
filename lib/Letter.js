// Constructor class.
// Used to create letters in the game that can be guessed. 
class Letter {
  constructor(character) {
    this.character = character;
    this.visible = !this.isAlphaNumeric(character);
  }

  // Used to check if letter or number, to set initial value of visible property.
  isAlphaNumeric(input) {
    return /[a-zA-Z0-9]/.test(input);
  }

  // Changes visible property to true if guessed correctly.
  guess(guess) {
    if (guess === this.character) {
      this.visible = true;
    }
    return this.visible;
  }

  // Returns the character if guessed (or a symbol), or as hidden string if not guessed. 
  toString() {
    return this.visible ? this.character : "_";
  }

  // Returns the character regardless of whether it has been guessed or not.
  getSolution() {
    return this.character;
  }
}

module.exports = Letter;
