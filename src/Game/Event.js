var Mob = require('./Mob');
var Building = require('./Building');

var events = [
  [{
    foes: [Mob.create('goblin')]
  }, {
    foes: [Mob.create('skeleton')]
  }],
  [{
    friends: [Mob.create('soldier')]
  }, {
    buildings: [Building.create('mine')]
  }],
  [{
    foes: [Mob.create('goblin')]
  }, {
    foes: [Mob.create('skeleton')]
  }]
];

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
