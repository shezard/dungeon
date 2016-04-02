var mine = require('../../../src/Game/Buildings/Mine');

describe('Mine', function() {
  it('should generate gold on turn start', function() {

    var state = mine.onTurnStart({});
    expect(state.gold).toBe(1);

    state = mine.onTurnStart({
      gold: 1
    });
    expect(state.gold).toBe(2);

  });
});
