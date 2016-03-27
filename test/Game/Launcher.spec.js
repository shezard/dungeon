var Launcher = require('../../src/Launcher.js');

describe('Launcher', function() {

  it('should have a start method', function() {
    expect(Launcher.start).toEqual(jasmine.any(Function));
  });

  it('initial state must have some default values', function() {
    var game = Launcher.start();
    expect(game).toEqual({
      level: 0
    });
  });

  it('should have a step method', function() {
    expect(Launcher.step).toEqual(jasmine.any(Function));
  });

  it('should return next state given an initial state', function() {
    var next = Launcher.step({
      level: 0
    });

    expect(next).toEqual({
      level: 1
    });
  });

  it('should proceed only with valid states', function() {

    expect(function() {
      Launcher.step()
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Launcher.step({})
    }).toThrow(new Error("Invalid state"));

    expect(function() {
      Launcher.step({
        level: -1
      })
    }).toThrow(new Error("Invalid state"));
  });

});
