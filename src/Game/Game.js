var State = require('./State');
var Battle = require('./Battle');
var Construct = require('./Construct');
var Mob = require('./Mob');
var _ = require('lodash');

module.exports = {
  start: start,
  step: step,
};

function start() {
  return {
    day: 0,
    friends: [Mob.create('soldier')]
  };
}

function step(state, event) {
  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  _.each(state.friends, function(friend) {
    if(friend.onTurnStart) {
      state = friend.onTurnStart(state);
    }
  });

  _.each(state.buildings, function(building) {
    if(building.onTurnStart) {
      state = building.onTurnStart(state);
    }
  });

  var friends = _.get(state, 'friends', []);
  var newFriends = _.get(event, 'friends', []);
  friends = _.concat(friends, newFriends);

  var foes = _.get(event, 'foes', []);

  var battle = Battle(friends, foes);

  var buildings = _.get(state, 'buildings', []);
  var newBuildings = _.get(event, 'buildings', []);
  var construct = Construct(buildings, newBuildings);

  return {
    day: state.day + 1,
    friends: battle.friends,
    foes: battle.foes,
    buildings : construct.buildings,
    gold: (state.gold || 0) + (battle.gold || 0) + (construct.gold || 0)
  }
}
