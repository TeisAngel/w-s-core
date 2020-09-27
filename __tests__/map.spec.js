const { Map, Position } = require('../index');
const { createMap, getOffset } = require('../lib/map');
const { getX, getY, createPosition } = require('../lib/position');

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

  describe('#getOffset', () => {
    it('returns center offset', () => {
      expect(getOffset(createMap({}))).toBeDefined();
    });

    it('returns (0,0) for a new game', () => {
      const offset = getOffset(createMap({}));
      const pos = createPosition(0, 0);
      expect(getX(offset)).toBe(getX(pos));
      expect(getY(offset)).toBe(getY(pos));
    })
  });
});
