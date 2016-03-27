var Mob = require('../../src/Game/Mob.js');

describe('Mob', function() {

  it('should have a create method', function() {
    expect(Mob.create).toEqual(jasmine.any(Function));
  });

  it('should create a mob given a state', function() {
    var mob = Mob.create({
      level: 0
    });

    expect(mob).toEqual({
      level: 0,
      hp: 2,
      attack: 1
    });
  });

  it('should only proceed with valid state', function() {
    expect(function() {
      Mob.create()
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Mob.create({})
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Mob.create({
        level: -1
      })
    }).toThrow(new Error("Invalid state"));
  });
});
