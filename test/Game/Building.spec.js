var Building = require('../../src/Game/Building');

describe('Building', function() {

  it('should have a create method', function() {
    expect(Building.create).toEqual(jasmine.any(Function));
  });

  it('should create a building given a name', function() {

    var barrack = Building.create('barrack');

    expect(barrack).toEqual({
      name: 'barrack',
      cost: 5
    });

  });

  it('should throw on invalid building creation request', function() {

    expect(function() {
      Building.create()
    }).toThrow(new Error('Empty building id'));

    expect(function() {
      Building.create('impossible')
    }).toThrow(new Error('Invalid building id: impossible'));

  });
});
