const { Game, Action } = require("../index");
const _ = require("lodash/fp");

describe("Game moves", () => {
  const prepare = () => {
    const game = Game.createGame({
      playersCount: 2,
    });

    const player = _.first(Game.getPlayers(game));

    const logic = Action.createActionsLogic();

    return { game, player, logic };
  };

  describe("Action logic creation", () => {
    test("returns action logic", () => {
      expect(Action.createActionsLogic()).toBeDefined();
    });
  });

  describe("Action creation", () => {
    test("retuns action producer", () => {
      const { logic, player } = prepare();

      expect(Action.producer(logic)(player)).toBeDefined();
    });

    test("retuns action", () => {
      const { logic, player } = prepare();

      const create = Action.producer(logic)(player);

      expect(create({})).toBeDefined();
    });
  });

  describe("Actions consuming", () => {
    test("returns action consumer", () => {
      const { logic, player } = prepare();
      expect(Action.consumer(logic)(player)).toBeDefined();
    });

    test("retuns new game state", () => {
      const { logic, game, player } = prepare();

      const create = Action.producer(logic)(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({}));

      expect(game).not.toBe(nextState);
    });
  });

  describe("Consumer logic", () => {
    const prepareWithNewLogic = () => {
      const logic = Action.createActionsLogic({
        consumer: ({ game, move }) => {
          if (move.isCorrect == true) return game;
          return Game.makeInvalid(game);
        },
      });

      return { ...prepare(), logic };
    };

    test("returns valid game state if move is valid", () => {
      const { logic, game, player } = prepareWithNewLogic();

      const create = Action.producer(logic)(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({ isCorrect: true }));

      expect(game).not.toBe(nextState);
    });

    test("returns invalid game state if action is invalid", () => {
      const { logic, game, player } = prepareWithNewLogic();

      const create = Action.producer(logic)(player);

      const apply = Action.consumer(logic)(game);

      const nextState = apply(create({ isCorrect: false }));

      expect(Game.isValid(nextState)).not.toBe(false);
    });
  });
});
