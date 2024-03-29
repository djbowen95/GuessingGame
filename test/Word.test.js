const Word = require('../lib/Word');
const Letter = require('../lib/Letter');

describe('Word class', () => {
  it('Creates an array of Letter objects', () => {
    const word = new Word('hi');

    expect(word.letters).toEqual(
      expect.arrayContaining([expect.objectContaining({ character: 'h' })])
    );

    expect(word.letters[0]).toBeInstanceOf(Letter);
  });

  describe('guessLetter', () => {
    it('Correct guess returns true', () => {
      expect(new Word('fish').guessLetter('h')).toBe(true);
    });

    it('Incorrect guess returns false', () => {
      expect(new Word('fish').guessLetter('o')).toBe(false);
    });

    it('Second correct guess still returns true', () => {
      const fish = new Word('fish');

      fish.guessLetter('i');
      
      expect(fish.guessLetter('h')).toBe(true);
    });

    it('Incorrect guess, after correct guess, returns false', () => {
      const fish = new Word('cat');

      fish.guessLetter('c');
      
      expect(fish.guessLetter('m')).toBe(false);
    })

    it('Correct guess will update the visible property', () => {
      const worm = new Word('worm');
      
      worm.guessLetter('w');
      
      const w = worm.letters[0];
      
      expect(w.visible).toBe(true);
    })
  });

  describe('guessedCorrectly ', () => {
    it('returns true if all letters are correct', () => {
      const word = new Word('hi');
      word.guessLetter('h');
      word.guessLetter('i');

      expect(word.guessedCorrectly()).toBe(true);
    });

    it('returns false if at least one letter is incorrect', () => {
      const word = new Word('hi');
      word.guessLetter('h');
      word.guessLetter('a');

      expect(word.guessedCorrectly()).toBe(false);
    });
  });

  describe('getSolution', () => {
    expect(new Word('chocolate').getSolution()).toBe('chocolate');
  } )

  describe('toString', () => {
    it('returns a string', () => {
      const word = new Word('chocolate');

      expect(typeof(word.toString())).toBe('string');
    })

    it('returns a string with equal length to the word', () => {
      const word = new Word('marshmallow');

      expect(word.toString().length).toEqual('marshmallow'.length);
    });

    it('returns unguessed letters as hidden', () => {
      const word = new Word('crumpet');

      expect(word.toString()).toBe('_______');
    });

    it('returns guessed letters as visible', () => {
      const word = new Word('potato');

      word.guessLetter('p');
      
      expect(word.toString()).toBe('p_____');
    });

    it('returns spaces and special characters as default', () => {
      const word = new Word('hash brown?');

      expect(word.toString()).toBe('____ _____?')
    });
  })
});
