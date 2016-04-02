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
      isValid: true,
      foes: [{
        name: 'goblin',
        hp: 1,
        attack: 1,
        gold: 1
      }]
    }, {
      isValid: true,
      foes: [{
        name: 'skeleton',
        hp: 2,
        attack: 1,
        gold: 2
      }]
    }]);
  });

  it('should generate events from state for second day', function() {
    var events = Event.create({
      day: 1
    });

    expect(events).toEqual([{
      isValid: true,
      friends: [{
        name: 'soldier',
        hp: 3,
        attack: 1
      }]
    }, {
      isValid: true,
      buildings: [{
        name: 'mine',
        cost: 0,
        description: 'Generates 1 [gold] per [day]'
      }]
    }]);
  });
});
