const { Map, Position } = require('../index');

describe('Game map', () => {
  describe('Map creation', () => {
    it('creates map', () => {
      expect(Map.createMap()).toBeDefined();
    });
  });

  describe('Reading map with #read and updating with #update', () => {
    const perform = (pos, value = 'Some value') => {
      const map = Map.update(Map.createMap())(pos)(value);

      expect(Map.read(map)(pos)).toBe(value);
    };

    it('reads value at position', () => {
      const pos = Position.createPosition(0, 0);
      perform(pos);
    });

    it('reads value at negative pos', () => {
      const pos = Position.createPosition(-1, -1);
      perform(pos);
    });

    it('reads value at positive pos', () => {
      const pos = Position.createPosition(1, 1);
      perform(pos);
    });

    it('reads value at positive X and negative Y pos', () => {
      const pos = Position.createPosition(1, -1);
      perform(pos);
    });

    it('reads value at negative X and positive Y pos', () => {
      const pos = Position.createPosition(-1, 1);
      perform(pos);
    });
  });
});
