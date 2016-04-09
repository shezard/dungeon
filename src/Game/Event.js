var Mob = require('./Mob');
var Building = require('./Building');

var events = [
  [{
    foes: [Mob.create('goblin')]
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
  }],
  [{
    friends: [Mob.create('thief')]
  },{
    buildings: [Building.create('farm')]
  }],
  [{
    foes: [Mob.create('goblinWarrior')]
  }, {
    foes: [Mob.create('goblinBerserker')]
  }],
  [{
    message: 'A goblin warlock appears',
    friends: [Mob.create('soldier'), Mob.create('paysan')]
  }],
  [{
    foes: [Mob.create('goblinWarlock')]
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
