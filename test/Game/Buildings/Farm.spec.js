var utils = require('../../utils');
var farm = require('../../../src/Game/Buildings/Farm');

describe('Farm', function() {

  it('should generate paysan', function() {

    var next = farm.onTurnStart({});
    expect(utils.summarize(next)).toEqual({
      friends: ['paysan']
    });

    next = farm.onTurnStart({
      friends: [{
        name: 'soldier',
        attack: 1,
        hp: 3
      }]
    });
    expect(utils.summarize(next)).toEqual({
      friends: ['soldier', 'paysan']
    });
  });
});
