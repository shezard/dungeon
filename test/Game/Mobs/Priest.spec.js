var Mob = require('../../../src/Game/Mob');

describe('Priest', function() {

  it('should heal wounded units', function() {

    var priest = Mob.create('priest');

    var next = priest.onTurnStart({
      friends: [{
        name: 'wounded soldier',
        hp: 1,
        maxHp: 3
      }, {
        name: 'wounded soldier',
        hp: 1,
        maxHp: 3
      }, {
        name: 'soldier',
        hp: 3,
        maxHp: 3
      }]
    });

    expect(next).toEqual({
      friends: [{
        name: 'wounded soldier',
        hp: 2,
        maxHp: 3
      }, {
        name: 'wounded soldier',
        hp: 2,
        maxHp: 3
      }, {
        name: 'soldier',
        hp: 3,
        maxHp: 3
      }]
    });

  });

});
