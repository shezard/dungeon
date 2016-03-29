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

    expect(events).toEqual([{
      foes: [{
        name: 'goblin',
        hp: 1,
        attack: 1
      }]
    }, {
      foes: [{
        name: 'skeleton',
        hp: 2,
        attack: 1
      }]
    }]);
  });

  it('should generate events from state for second day', function() {
    var events = Event.create({
      day: 1
    });

    expect(events).toEqual([{
      friends: [{
        name: 'soldier',
        hp: 3,
        attack: 1
      }]
    }]);
  });
});
