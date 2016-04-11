var Mob = require('../../src/Game/Mob.js');

describe('Mob', function() {

  it('should have a create method', function() {
    expect(Mob.create).toEqual(jasmine.any(Function));
  });

  it('should create a mob given a name', function() {

    var soldier = Mob.create('soldier');

    expect(soldier).toEqual({
      name: 'soldier',
      hp: 3,
      maxHp: 3,
      attack: 1
    });

    var skeleton = Mob.create('skeleton');

    expect(skeleton).toEqual({
      name: 'skeleton',
      hp: 2,
      maxHp: 2,
      attack: 1,
      gold: 2
    });

    var goblin = Mob.create('goblin');

    expect(goblin).toEqual({
      name: 'goblin',
      hp: 1,
      maxHp: 1,
      attack: 1,
      gold: 1
    });
  });

  it('should throw on invalid mob creation request', function() {

    expect(function() {
      Mob.create()
    }).toThrow(new Error('Empty mob id'));

    expect(function() {
      Mob.create('impossible')
    }).toThrow(new Error('Invalid mob id: impossible'));

  });
});
