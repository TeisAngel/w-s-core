const { Game } = require('../index');

describe('Game settings', () => {

  describe('players', () => {
    it('it creates game with players', () => {
      const game = Game.createGame({
        playersCount: 4
      });

      expect(Game.getPlayers(game)).toBeDefined();
    });

    it('it creates game with exect number of players', () => {
      const gameState = Game.createGame({
        playersCount: 4
      });

      expect(Game.getPlayers(gameState)).toBeInstanceOf(Array);
    });

    it('it creates game with exect number of players', () => {
      const gameState = Game.createGame({
        playersCount: 4
      });

      expect(Game.getPlayers(gameState).length).toBe(4);
    });
  });
});