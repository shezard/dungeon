var utils = require('../utils');

var Event = require('../../src/Game/Event')(
  // TODO : inject random here
);

describe('Event', function() {

  it('should have a create method', function() {
    expect(Event.create).toEqual(jasmine.any(Function));
  });

  it('should generate events from a state for first day', function() {
    var events = Event.create({
      day: 0
    });

    expect(utils.summarize(events)).toEqual([{
      foes: ['goblin']
    }]);
  });

  it('should generate events from state for second day', function() {
    var events = Event.create({
      day: 1
    });

    expect(utils.summarize(events)).toEqual([{
      friends: ['soldier']
    }, {
      buildings: ['mine']
    }]);
  });
});
