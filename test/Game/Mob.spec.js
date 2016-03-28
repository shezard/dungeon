var Mob = require('../../src/Game/Mob.js');

describe('Mob', function() {

  it('should have a create method', function() {
    expect(Mob.create).toEqual(jasmine.any(Function));
  });

  it('should create a mob given a name', function() {
    var mob = Mob.create('skeleton');

    expect(mob).toEqual({
      hp: 2,
      attack: 1
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
