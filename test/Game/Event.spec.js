var Event = require('../../src/Game/Event')(
  // TODO : inject random here
);

describe('Event', function() {

  it('should have a create method', function() {
    expect(Event.create).toEqual(jasmine.any(Function));
  });

  it('should generate events from a state', function() {
    var events = Event.create({
      level: 0
    });

    expect(events).toEqual([{
      foes: [{
        name: 'goblin',
        hp: 1,
        attack: 1
      }]
    }]);
  });
});
