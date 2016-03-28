var State = require('./State');
var Battle = require('./Battle');
var Mob = require('./Mob');
var _ = require('lodash');

module.exports = {
  start: start,
  step: step,
};

function start() {
  return {
    level: 0,
    friends: [Mob.create('soldier')]
  };
}

function step(state, event) {
  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  var friends = _.get(state, 'friends', []);
  var foes = _.get(event, 'foes', []);

  var result = Battle(friends, foes);

  return {
    level: state.level + 1,
    friends: result.friends,
    foes: result.foes
  }
}
