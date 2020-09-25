const { Map } = require('../index');

describe('Game map', () => {

  describe('Map creation', () => {
    test('creates map', () => {
      expect(Map.createMap()).toBeDefined();
    });
  });

  describe('Reading map with #read', () => {
    const perform = (pos, value = 'Some value') => {
      const map = Map();
      const update = Map.update(map);
      update(pos, value);

      expect(Map.read(map)(pos)).toEq(value);
    }

    test('reads value at position', () => {
      const pos = Position.createPosition(0, 0);
      perform(pos);
    });

    test('reads value at negative pos', () => {
      const pos = Position.createPosition(-1, -1);
      perform(pos);
    });

    test('reads value at positive pos', () => {
      const pos = Position.createPosition(1, 1);
      perform(pos);
    });

    test('reads value at positive X and negative Y pos', () => {
      const pos = Position.createPosition(1,-1);
      perform(pos);
    });

    test('reads value at negative X and positive Y pos', () => {
      const pos = Position.createPosition(-1,1);
      perform(pos);
    });
  })

  describe('Updating map with #update', () => {
    const perform = (pos, value = 'Some value') => {
      const map = Map();
      const update = Map.update(map);
      update(pos, value);

      expect(Map.read(map)(pos)).toEq(value);
    }

    test('updates value at position', () => {
      const pos = Position.createPosition(0, 0);
      perform(pos);
    });

    test('updates value at negative pos', () => {
      const pos = Position.createPosition(-1, -1);
      perform(pos);
    });

    test('updates value at positive pos', () => {
      const pos = Position.createPosition(1, 1);
      perform(pos);
    });

    test('updates value at positive X and negative Y pos', () => {
      const pos = Position.createPosition(1,-1);
      perform(pos);
    });

    test('updates value at negative X and positive Y pos', () => {
      const pos = Position.createPosition(-1,1);
      perform(pos);
    });
  });

});