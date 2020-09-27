const _ = require('lodash/fp');

const { createPlayer } = require('./player');
const { createMap } = require('./map');

const createGame = ({ playersCount: length = 2 } = {}) => ({
  players: Array.from({ length }, () => createPlayer()),
  isValidGameState: true,
  map: createMap(),
});

const getPlayers = game => game.players;

const makeInvalid = game => _.set('isValidGameState', false, game);
const isValid = (game = false) => game && game.isValidGameState === true;

const setMap = game => map => _.set('map', map, game);
const getMap = game => game.map;

module.exports = {
  createGame,
  getPlayers,
  isValid,
  makeInvalid,
  setMap,
  getMap,
};
