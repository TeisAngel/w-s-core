const { Game, Action } = require('../index');
const _ = require('lodash/fp');

describe('Game moves', () => {
  const prepare = () => {
    const game = Game.createGame({
      playersCount: 2,
    });

    const player = _.first(Game.getPlayers(game));

    const logic = Action.createActionsLogic();

    return { game, player, logic };
  };

  describe('Action logic creation', () => {
    it('returns action logic', () => {
      expect(Action.createActionsLogic()).toBeDefined();
    });
  });

  describe('Action creation', () => {
    it('retuns action producer', () => {
      const { player } = prepare();

      expect(Action.producer(player)).toBeDefined();
    });

    it('retuns action', () => {
      const { player } = prepare();

      const create = Action.producer(player);

      expect(create({})).toBeDefined();
    });
  });

  describe('Actions consuming', () => {
    it('returns action consumer', () => {
      const { logic, player } = prepare();
      expect(Action.consumer(logic)(player)).toBeDefined();
    });

    it('retuns new game state', () => {
      const { logic, game, player } = prepare();

      const create = Action.producer(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({}));

      expect(game).not.toBe(nextState);
    });
  });

  describe('Consumer logic', () => {
    const prepareWithNewLogic = () => ({
      ...prepare(),
      logic: Action.createActionsLogic({
        consumer: ({ game, action }) => {
          if (action.payload.isCorrect == true) return game;
          return Game.makeInvalid(game);
        },
      }),
    });

    it('returns valid game state if move is valid', () => {
      const { logic, game, player } = prepareWithNewLogic();

      const create = Action.producer(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({ isCorrect: true }));

      expect(Game.isValid(nextState)).toBe(true);
    });

    it('returns invalid game state if action is invalid', () => {
      const { logic, game, player } = prepareWithNewLogic();

      const create = Action.producer(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({ isCorrect: false }));

      expect(Game.isValid(nextState)).toBe(false);
    });
  });
});
