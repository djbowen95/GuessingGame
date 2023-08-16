function isCharacterALetter(char) {
    return (/[a-zA-Z0-9]/).test(char);
  }

console.log(isCharacterALetter("6"))