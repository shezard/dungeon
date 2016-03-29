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
      foes: [],
      gold: 0
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
      foes: [],
      gold: 0
    });

    expect(Battle([{
      attack: 1,
      hp: 3
    }], [{
      attack: 2,
      hp: 2
    }])).toEqual({
      friends: [],
      foes: [],
      gold: 0
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
      foes: [],
      gold: 0
    });
  });

  it('should resolve lost battle', function() {
    expect(Battle([{
      attack: 1,
      hp: 1
    }], [{
      attack: 1,
      hp: 1
    }])).toEqual({
      friends: [],
      foes: [],
      gold: 0
    })
  });

  it('should handle gold rewards', function() {
    expect(Battle([{
      attack: 1,
      hp: 2
    }], [{
      attack: 1,
      hp: 1,
      gold: 10
    }])).toEqual({
      friends: [{
        attack: 1,
        hp: 1
      }],
      foes: [],
      gold: 10
    });
  });
});
