var Building = require('../../../src/Game/Building');

describe('Mine', function() {
  it('should generate gold on turn start', function() {

    var mine = Building.create('mine');

    var state = mine.onTurnStart({});
    expect(state.gold).toBe(1);

    state = mine.onTurnStart({
      gold: 1
    });
    expect(state.gold).toBe(2);

  });
});
