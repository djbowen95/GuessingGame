class Game {
    constructor() {
        this.guessesLeft = 0;
    }

    play() {
        this.guessesLeft = 10;
        return;
    }

    nextWord() {
        return "Hello World";
    }
};

module.exports = Game;