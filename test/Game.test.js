const Game = require('../lib/Game');

describe('Initialisation', () => {
    it('guessesLeft property', () => {
        const game = new Game();

        expect(game.guessesLeft).toBeDefined();
        expect(typeof (game.guessesLeft)).toBe('number');
    });
    
    it('make guess method', () => {});
    it('play method', () => {});
    it('quit method', () => {});
    it('play again method', () => {});
    it('ask for letter method', () => {});
    it('next word method', () => {});
})