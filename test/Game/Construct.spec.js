var Construct = require('../../src/Game/Construct');

describe('Construct', function() {

  it('should handle empty addition', function() {
    var construct = Construct([], []);

    expect(construct).toEqual({
      gold: 0,
      buildings: []
    });

  });

  it('should handle new buildings cost', function() {
    var construct = Construct([], [{
      name: 'Barrack',
      cost: 5
    }, {
      name: 'Barrack',
      cost: 5
    }]);

    expect(construct).toEqual({
      gold: -10,
      buildings: [{
        name: 'Barrack',
        cost: 5
      }, {
        name: 'Barrack',
        cost: 5
      }]
    });
  })

});
