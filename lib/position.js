const createPosition = (x, y) => ({ x, y });

const getAxis = axis => pos => pos[axis];
const getX = getAxis('x');
const getY = getAxis('y');

const asArray = pos => [getX(pos), getY(pos)];

const add = pos1 => pos2 =>
  createPosition(getX(pos1) + getX(pos2), getY(pos1) + getY(pos2));

module.exports = {
  createPosition,
  getX,
  getY,
  add,
  asArray,
};
