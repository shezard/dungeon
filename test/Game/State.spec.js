var State = require('../../src/Game/State');

describe('State', function() {

  it('should reject invalid state', function() {
    var isValidState = State.isValid({})

    expect(isValidState).toBe(false);
  });

  it('should accept valid state', function() {
    var isValidState = State.isValid({
      day: 0
    });

    expect(isValidState).toBe(true);
  })
});
