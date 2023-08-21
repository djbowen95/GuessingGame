const Game = require('../lib/Game');

describe('Initialisation', () => {
    it('guessesLeft property', () => {
        const game = new Game();

        expect(game.guessesLeft).toBeDefined();
        expect(typeof (game.guessesLeft)).toBe('number');
    });


    it('play method', () => {
        const game = new Game();
    
        expect(game.play()).toBeDefined();
        expect(typeof (game.play)).toBe('function');
    });

    it('next word method', () => {});
    
    it('ask for letter method', () => {});
    it('make guess method', () => {});

    it('quit method', () => {});
    it('ask to play again method', () => {});    
   
});

describe('Start a new game with .play()', () => {
    it('sets the guessesLeft to 10', () => {
        const game = new Game();

        game.play();

        expect(game.guessesLeft).toBe(10);
    });
    it('runs function to select a word', () => {
        // const game = new Game();

        // game.play();

        // const play = jest.fn(); ... then nextWord() = jest.fn();        
    });
});

describe('Select a new word with .nextWord()', () => {
    it('selects a word from the words module', () => {});
    it('the word from the list is random', () => {});
    it('creates a new instance of the Word class', () => {});
    it('logs the starting string to the console', () => {});
    it('runs the command to prompt the user for input', () => {});
});
