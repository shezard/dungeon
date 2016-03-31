var Game = require('../../src/Game/Game.js');

describe('Game', function() {

  it('should have a start method', function() {
    expect(Game.start).toEqual(jasmine.any(Function));
  });

  it('initial state must have some default values', function() {
    var game = Game.start();
    expect(game).toEqual({
      day: 0,
      friends: [{
        name: 'soldier',
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
      day: 0
    });

    expect(next).toEqual({
      day: 1,
      friends: [],
      foes: [],
      buildings: [],
      gold: 0
    });
  });

  it('should resolve battle events', function() {
    var next = Game.step({
      day: 0,
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
      day: 1,
      friends: [{
        attack: 1,
        hp: 1
      }],
      foes: [],
      buildings: [],
      gold: 0
    });

    var next = Game.step({
      day: 0,
      friends: [{
        attack: 1,
        hp: 3
      }]
    }, {
      foes: [{
        attack: 1,
        hp: 1
      }, {
        attack: 1,
        hp: 1
      }]
    });

    expect(next).toEqual({
      day: 1,
      friends: [{
        attack: 1,
        hp: 1
      }],
      buildings: [],
      foes: [],
      gold: 0
    });
  });

  it('should resolve new troups events', function() {
    var next = Game.step({
      day: 1,
      friends: [{
        attack: 1,
        hp: 3
      }]
    }, {
      friends: [{
        attack: 1,
        hp: 3
      }]
    });

    expect(next).toEqual({
      day: 2,
      friends: [{
        attack: 1,
        hp: 3
      }, {
        attack: 1,
        hp: 3
      }],
      foes: [],
      buildings: [],
      gold: 0
    });
  });

  it('should add gold if a battle gives gold', function() {
    var next = Game.step({
      day: 1,
      friends: [{
        attack: 1,
        hp: 3
      }]
    }, {
      foes: [{
        attack: 1,
        hp: 1,
        gold: 1
      }]
    });

    expect(next).toEqual({
      day: 2,
      friends: [{
        attack: 1,
        hp: 2
      }],
      foes: [],
      buildings: [],
      gold: 1
    });
  });

  it('should resolve new buildings events', function() {
    var next = Game.step({
      day: 0,
      gold: 5
    }, {
      buildings: [{
        name: 'barrack',
        cost: 5
      }]
    });

    expect(next).toEqual({
      day: 1,
      gold: 0,
      friends: [],
      foes: [],
      buildings: [{
        name: 'barrack',
        cost: 5
      }]
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
        day: -1
      })
    }).toThrow(new Error("Invalid state"));
  });

});
