var _ = require('lodash');
var Mob = require('./Mob');
var Building = require('./Building');
var days = require('./Events/events.json').days;

var events = _.map(days, function(day) {
  var dailyEvents = _.map(day.events, function(event) {
    event.foes = createThing(event.foes, Mob.create);
    event.friends = createThing(event.friends, Mob.create);
    event.buildings = createThing(event.buildings, Building.create);
    return event;
  });

  return {
    message: day.message,
    events: dailyEvents
  };
});

module.exports = function() {
  return {
    create: create
  };
};

function create(state) {

  var currentDay = events[state.day];

  var currentEvents = _.map(currentDay.events, function(event) {

    var buildings = _.get(event, 'buildings', []);
    var buildingCosts = _.reduce(buildings, function(sum, building) {
      return sum + building.cost;
    }, 0);

    event.isValid = (state.gold || 0) >= buildingCosts;
    return event;
  })

  return {
    message: currentDay.message,
    events: currentEvents
  }
}

function createThing(thingList, create) {
  return _.map(thingList, function(thing) {
    return create(thing);
  });
}
