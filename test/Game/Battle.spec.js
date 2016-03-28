var Battle = require('../../src/Game/Battle');

describe('Battle', function() {

  it('should resolve battle', function() {

    expect(Battle([{
      attack: 1,
      hp: 3
    }], [{
      attack: 1,
      hp: 1
    }])).toEqual({
      friends: [{
        attack: 1,
        hp: 2
      }],
      foes: []
    });

    expect(Battle([{
      attack: 1,
      hp: 3
    }], [{
      attack: 1,
      hp: 2
    }])).toEqual({
      friends: [{
        attack: 1,
        hp: 1
      }],
      foes: []
    });

    expect(Battle([{
      attack: 1,
      hp: 3
    }], [{
      attack: 2,
      hp: 2
    }])).toEqual({
      friends: [],
      foes: []
    });
  });

  it('should resolve multi units battle', function() {
    expect(Battle([{
      attack: 1,
      hp: 1
    }, {
      attack: 1,
      hp: 2
    }], [{
      attack: 1,
      hp: 2
    }])).toEqual({
      friends: [{
        attack: 1,
        hp: 1
      }],
      foes: []
    });
  });
});
