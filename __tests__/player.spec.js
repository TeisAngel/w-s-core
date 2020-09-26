const { createPlayer } = require('../lib/player');

describe('Player', () => {
  it('it creates new player', () => {
    expect(createPlayer()).toBeDefined();
  });

  it('it creates new player with payload', () => {
    const customProp = 'Some valud';
    const player = createPlayer({ customProp });
    expect(player.customProp).toBe(customProp);
  });
});
