const Game = require('../lib/Game');

describe('Initialisation', () => {
    it('guessesLeft property', () => {
        const game = new Game();

        expect(game.guessesLeft).toBeDefined();
        expect(typeof (game.guessesLeft)).toBe('number');
    });


    it('play method', () => {});
    it('next word method', () => {});
    
    it('ask for letter method', () => {});
    it('make guess method', () => {});

    it('quit method', () => {});
    it('ask to play again method', () => {});    
   
});

describe('Start a new game with .play()', () => {
    it('sets the guessesLeft to 10', () => {});
    it('runs function to select a word', () => {});
});

describe('Select a new word with .nextWord()', () => {
    it('selects a word from the words module', () => {});
    it('the word from the list is random', () => {});
    it('creates a new instance of the Word class', () => {});
    it('logs the starting string to the console', () => {});
    it('runs the command to prompt the user for input', () => {});
});
