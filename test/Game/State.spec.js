var State = require('../../src/Game/State');

describe('State', function() {

  it('should validate state', function() {

    var isValidState = State.isValid({})

    expect(isValidState).toBe(false);

  });
});
