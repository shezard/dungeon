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
    message: 'You wake up in the middle of the battlefield. Around you lay hundreds of body, mostly goblin, with a few human as well.',
    friends: [Mob.create('soldier')]
  };
}

function step(state, event) {
  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  state = turnStart(state);

  var friends = _.get(state, 'friends', []);
  var newFriends = _.get(event, 'friends', []);
  friends = _.concat(friends, newFriends);

  var foes = _.get(event, 'foes', []);

  var battle = Battle(friends, foes);

  var buildings = _.get(state, 'buildings', []);
  var newBuildings = _.get(event, 'buildings', []);
  var construct = Construct(buildings, newBuildings);

  var nextState = {
    day: state.day + 1,
    friends: battle.friends,
    foes: battle.foes,
    buildings : construct.buildings,
    gold: (state.gold || 0) + (battle.gold || 0) + (construct.gold || 0)
  };

  if(event && event.message) {
    nextState.message = event.message;
  }

  return nextState;
}

function turnStart(state) {
  var units = _.concat(state.friends, state.buildings);

  state = _.reduce(units, function(state, unit) {
    if(unit && unit.onTurnStart) {
      state = unit.onTurnStart(state);
    }
    return state;
  }, state)

  return state;
}
