const { Map, Position } = require('../index');
const { createMap, getOffset, getMapAsArray } = require('../lib/map');
const { getX, getY, createPosition } = require('../lib/position');

describe('Game map', () => {
  describe('Map creation', () => {
    it('creates map', () => {
      expect(Map.createMap()).toBeDefined();
    });
  });

  describe('#read', () => {
    const perform = (x, y, value = 'Some value') => () => {
      const pos = createPosition(x, y);
      const map = Map.update(Map.createMap())(pos)(value);
      expect(Map.read(map)(pos)).toBe(value);
    };

    it('reads value at position', perform(0, 0));
    it('reads value at negative pos', perform(-1, -1));
    it('reads value at positive pos', perform(1, 1));
    it('reads value at positive X and negative Y pos', perform(1, -1));
    it('reads value at negative X and positive Y pos', perform(-1, 1));
  });

  describe('#update', () => {
    const perform = (x, y, value = 'Some value') => () => {
      const pos = createPosition(x, y);
      const map = Map.update(Map.createMap())(pos)(value);
      const arr = getMapAsArray(map);
      expect(arr[0>y?0:y][0>x?0:x]).toBe(value);
    };

    it('updates value at position', perform(0, 0));
    it('updates value at negative pos', perform(-1, -1));
    it('updates value at positive pos', perform(1, 1));
    it('updates value at positive X and negative Y pos', perform(1, -1));
    it('updates value at negative X and positive Y pos', perform(-1, 1));

    describe('workinh with negative coords', () => {
      const perform = (x = -1, y = -1, value = 'Some value') => {
        const pos = createPosition(x, y);
        const map = Map.update(Map.createMap())(pos)(value);
        const arr = getMapAsArray(map);
        const offset = getOffset(map);

        return { arr, offset };
      };

      it('updates offset', () => {
        const { offset } = perform();

        expect(getX(offset)).toBe(1);
        expect(getY(offset)).toBe(1);
      });

      it('returns array without negative coords', () => {
        const { arr } = perform();
        expect(Array.from(arr.keys()).length).toBe(1)
      });
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
    });
  });
});
