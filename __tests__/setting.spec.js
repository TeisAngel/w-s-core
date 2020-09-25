const { Game } = require('../index');

describe('Game settings', () => {

  describe('players', () => {
    test('it creates game with players', () => {
      const game = Game.createGame({
        playersCount: 4
      });

      expect(Game.getPlayers(game)).toBeDefined();
    });

    test('it creates game with exect number of players', () => {
      const gameState = Game.createGame({
        playersCount: 4
      });

      expect(getPlayers(gameState)).toBeInstanceOf(Array);
    });

    test('it creates game with exect number of players', () => {
      const gameState = Game.createGame({
        playersCount: 4
      });

      expect(getPlayers(gameState).length).toBe(4);
    });
  });
});