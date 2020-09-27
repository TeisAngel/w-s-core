const { createGame, isValid, makeInvalid, getMap, setMap } = require('../lib/game');
const { createMap } = require('../lib/map');

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

  describe('#getMap', () => {
    it('returns map', () => {
      expect(getMap(createGame())).toBeDefined();
    })
  });

  describe('#setMap', () => {
    it('returns valid game state', () => {
      const game = createGame();
      const map = createMap();
      expect(isValid(setMap(game)(map))).toBe(true);
    });
    it('returns new game instance', () => {
      const game = createGame();
      const map = createMap();
      const nextGameState = setMap(game)(map);
      expect(game).not.toBe(nextGameState);
    });
  });
});
