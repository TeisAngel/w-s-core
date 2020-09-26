const createActionsLogic = ({ consumer = game => game } = {}) => ({ consumer });

const getConsumer = logic => logic.consumer;

const producer = player => payload => ({ player, payload });
const consumer = logic => game => action => getConsumer(logic)({ game, action });

module.exports = {
  createActionsLogic,
  producer,
  consumer,
};
