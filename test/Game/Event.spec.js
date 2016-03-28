var Event = require('../../src/Game/Event')(
  // TODO : inject random here
);

describe('Event', function() {

  it('should have a create method', function() {
    expect(Event.create).toEqual(jasmine.any(Function));
  });

  it('should generate an event from a state', function() {
    var event = Event.create({
      level: 0
    });
    expect(event).toEqual({
      foes: [{
        name: 'skeleton',
        hp: 2,
        attack: 1
      }]
    })
  });
});
