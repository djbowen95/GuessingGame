class Game {
    constructor() {
        this.guessesLeft = 0;
    }

    play() {
        this.guessesLeft = 10;
        return true;
    }
};

module.exports = Game;