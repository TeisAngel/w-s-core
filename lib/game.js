const _ = require('lodash/fp');

const createGame = ({ playersCount: length = 2 } = {}) => ({
  players: Array.from({ length }, () => ({})),
  isValidGameState: true,
});

const getPlayers = game => game.players;

const makeInvalid = game => ({ ..._.cloneDeep(game), isValidGameState: false });
const isValid = (game = false) => game && game.isValidGameState === true;

module.exports = {
  createGame,
  getPlayers,
  isValid,
  makeInvalid,
};
