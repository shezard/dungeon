var Game = require('../../src/Game/Game.js');

describe('Game', function() {

  it('should have a start method', function() {
    expect(Game.start).toEqual(jasmine.any(Function));
  });

  it('initial state must have some default values', function() {
    var game = Game.start();
    expect(game).toEqual({
      level: 0,
      friends: [{
        hp: 3,
        attack: 1
      }]
    });
  });

  it('should have a step method', function() {
    expect(Game.step).toEqual(jasmine.any(Function));
  });

  it('should return next state given an initial state', function() {
    var next = Game.step({
      level: 0
    });

    expect(next).toEqual({
      level: 1,
      friends: [],
      foes: []
    });
  });

  it('should resolve battle events', function() {
    var next = Game.step({
      level: 0,
      friends: [{
        attack: 1,
        hp: 3
      }]
    }, {
      foes: [{
        attack: 1,
        hp: 2
      }]
    });

    expect(next).toEqual({
      level: 1,
      friends: [{
        attack: 1,
        hp: 1
      }],
      foes: []
    });
  });

  it('should proceed only with valid states', function() {

    expect(function() {
      Game.step()
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Game.step({})
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Game.step({
        level: -1
      })
    }).toThrow(new Error("Invalid state"));
  });

});
