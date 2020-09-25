const { Position } = require('../index');

describe('Game position', () => {
  it('creates position', () => {
    expect(Position.createPosition(0, 0)).toBeDefined();
  });

  it('creates position with right coordinates', () => {
    const x = 1,
      y = 1;
    const pos = Position.createPosition(x, y);

    expect(Position.getX(pos)).toBe(x);
    expect(Position.getY(pos)).toBe(y);
  });

  describe('#add', () => {
    it('returns function', () => {
      const pos = Position.createPosition(0, 0);
      expect(typeof Position.add(pos)).toBe('function');
    });

    it('adds two position', () => {
      const pos1 = Position.createPosition(34345, 21);
      const pos2 = Position.createPosition(0, -121);

      const res = Position.add(pos1)(pos2);

      expect(Position.getX(res)).toBe(
        Position.getX(pos1) + Position.getX(pos2),
      );
      expect(Position.getY(res)).toBe(
        Position.getY(pos1) + Position.getY(pos2),
      );
    });
  });

  describe('#asArray', () => {
    it('returns position as array', () => {
      const pos = Position.createPosition(-12, 923);
      expect(Position.asArray(pos)).toStrictEqual([
        Position.getX(pos),
        Position.getY(pos),
      ]);
    });
  });
});
