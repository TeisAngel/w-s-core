const createGame = ({ playersCount: length = 2 }) => ({
  players: Array.from({ length }, () => ({})),
});

const getPlayers = game => game.players;
const isValid = () => {};

module.exports = {
  createGame,
  getPlayers,
  isValid,
};
