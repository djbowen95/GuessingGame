const Game = require('../lib/Game');

describe('Initialisation', () => {
    it('guessesLeft property to record current turn', () => {
        const game = new Game();

        expect(game.guessesLeft).toBeDefined();
        expect(typeof (game.guessesLeft)).toBe('number');
    });


    it('play method to start game', () => {
        const game = new Game();
    
        expect(game.play).toBeDefined();
        expect(typeof (game.play)).toBe('function');
    });

    it('nextWord method to select a new word', () => {
        const game = new Game();

        expect(game.nextWord).toBeDefined();
        expect(typeof (game.nextWord)).toBe('function');
    });
    
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
    it('test mock', () => {
        const game = new Game();

        // const play = jest.fn();
        const play = jest.spyOn(game, "play");
        play.mockImplementation(() => {});
        
        game.play();
        game.play();
        game.play();

        expect(play.mock.calls).toHaveLength(2);
        play.mockRestore();
    })

    it('runs function to select a word', () => {
        const game = new Game();

        const spy = jest.spyOn(game, "nextWord");
        spy.mockImplementation(() => {});

        game.play();

        expect(spy.mock.calls).toHaveLength(1);
        spy.mockRestore();
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
