var _ = require('lodash');

module.exports = {
  state: state,
  event: event
};

function state(state) {
  console.log("Level : " + state.level);
  console.log("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,'));
}

function event(event) {
  console.log("Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', '));
}
