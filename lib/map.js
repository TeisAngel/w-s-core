const _ = require('lodash/fp');

const { createPosition, add, asArray } = require('./position');

const createMap = () => ({
  tiles: [],
  offset: createPosition(0, 0),
});

const getOffset = map => map.offset;
const getPosAtMap = map => pos => add(getOffset(map))(pos);

const getMapAsArray = map => map.tiles;
const setMapFromArray = map => arr => _.set('tiles', arr, _.cloneDeep(map));

const withRealPos = f => map => pos => f({ map, pos: getPosAtMap(map)(pos) });

const read = withRealPos(({ map, pos }) =>
  _.get(asArray(pos), getMapAsArray(map)),
);

const update = withRealPos(({ map, pos }) => value =>
  setMapFromArray(map)(_.set(asArray(pos), value, getMapAsArray(map))),
);

module.exports = {
  createMap,
  update,
  read,
};
