var Mob = require('./Mob');
var Building = require('./Building');
var days = require('./Events/events.json').days;

var events = _.map(days, function(dailyEvents) {
  return _.map(dailyEvents, function(event) {
    event.foes = _.map(event.foes, function(foe) {
      return Mob.create(foe);
    });
    event.friends = _.map(event.friends, function(friend) {
      return Mob.create(friend);
    });
    event.buildings = _.map(event.buildings, function(building) {
      return Building.create(building);
    });
    return event;
  });
});

module.exports = function() {
  return {
    create: create
  };
};

function create(state) {

  var currentEvents = events[state.day];

  currentEvents = _.map(currentEvents, function(event) {

    var buildings = _.get(event, 'buildings', []);
    var buildingCosts = _.reduce(buildings, function(sum, building) {
      return sum + building.cost;
    }, 0);

    event.isValid = (state.gold || 0) >= buildingCosts;
    return event;
  })

  return currentEvents;
}
