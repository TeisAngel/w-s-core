const { Position } = require('../index');

describe('Game position', () => {
  test('it creates position', () => {
    expect(Position.createPosition(0, 0)).toBeDefined();
  });

  test('it creates position with right coordinates', () => {
    const x = 1, y = 1;
    const pos = Position.createPosition(x, y);

    expect(Position.getX(pos)).toBe(x);
    expect(Position.getY(pos)).toBe(y);
  });
});