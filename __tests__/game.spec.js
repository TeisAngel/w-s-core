const { createGame, isValid, makeInvalid } = require('../lib/game');

describe('Game', () => {
  it('creates new game', () => {
    const game = createGame();

    expect(game).toBeDefined();
  });

  describe('#isValid', () => {
    it('returns false if game is invalid', () => {
      expect(isValid()).toBe(false);
    });

    it('returns true for a new game', () => {
      expect(isValid(createGame())).toBe(true);
    });

    it('returns true for a invalid game', () => {
      const invalidGame = makeInvalid(createGame());
      expect(isValid(invalidGame)).toBe(false);
    });
  });
});
