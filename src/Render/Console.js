var _ = require('lodash');

var EOL = '\n';

module.exports = {
  init: init,
  showState: showState,
  showEvents: showEvents
};

function init() {
  
}

function showState(state) {
  console.log("Day : " + state.day + EOL);
  console.log("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,') + EOL);
}

function showEvents(events) {
  console.log(_.map(events, function(event, index) {
    return showEvent(event, index);
  }).join(EOL));
}

function showEvent(event, index) {
  return index + " > Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', ');
}
