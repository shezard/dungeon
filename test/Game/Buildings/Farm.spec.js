var utils = require('../../utils');
var Building = require('../../../src/Game/Building');

describe('Farm', function() {

  it('should generate paysan', function() {

    var farm = Building.create('farm');

    var next = farm.onTurnStart({});
    expect(utils.summarize(next)).toEqual({
      friends: ['paysan']
    });
  });
});
