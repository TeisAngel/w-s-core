const _ = require('lodash/fp');

const { createPosition, add, asArray, getX, getY } = require('./position');

const createMap = () => ({
  tiles: [],
  offset: createPosition(0, 0),
});

const prop = k => map => map[k];

const getOffset = prop('offset');
const setOffset = map => offset => _.set('offset', offset, map);
const getPosAtMap = map => pos => add(getOffset(map))(pos);

const getMapAsArray = prop('tiles');
const setMapFromArray = map => arr => _.set('tiles', arr, map);

const withRealPos = f => map => pos => f({ map, pos: getPosAtMap(map)(pos) });

const read = withRealPos(({ map, pos }) =>
  _.get(asArray(pos), getMapAsArray(map)),
);

const setValue = (i, v, arr = []) => {
  if (0 > i) (arr = [...new Array(-i), ...arr]), (i = 0);
  return _.set(i, v, arr);
};

const index = axis => (0 > axis ? 0 : axis);

const update = withRealPos(({ map, pos }) => v => {
  const arr = _.cloneDeep(getMapAsArray(map)),
    y = getY(pos),
    x = getX(pos),
    ry = index(y),
    rx = index(x),
    offset = createPosition(rx - x, ry - y);

  map = setOffset(map)(offset);
  map = setMapFromArray(map)(setValue(ry, setValue(x, v, arr[ry]), arr));

  return map;
});

module.exports = {
  createMap,
  update,
  read,
  getOffset,
  getMapAsArray,
};
