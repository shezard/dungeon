var _ = require('lodash');

module.exports = {
  showState: showState,
  showEvents: showEvents
};

function showState(state) {
  console.log("Level : " + state.level);
  console.log("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,'));
}

function showEvents(events) {
  _.each(events, function(event) {
    showEvent(event);
  });
}

function showEvent(event) {
  console.log("Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', '));
}
