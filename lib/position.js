const createPosition = (x, y) => ({ x, y })

const getAxis = axis => pos => pos[axis];
const getX = getAxis('x');
const getY = getAxis('y');

module.exports = {
  createPosition,
  getX, getY,
}