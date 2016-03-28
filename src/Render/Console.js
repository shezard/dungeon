var _ = require('lodash');

module.exports = {
  showState: showState,
  showEvents: showEvents
};

function showState(state) {
  console.log("Day : " + state.day);
  console.log("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,'));
}

function showEvents(events) {
  console.log(_.map(events, function(event, index) {
    return showEvent(event, index);
  }).join('\n'));
}

function showEvent(event, index) {
  return index + " > Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', ');
}
