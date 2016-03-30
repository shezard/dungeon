var _ = require('lodash');
var $ = require('jquery');

var EOL = '<br/>';

module.exports = {
  showState: showState,
  showEvents: showEvents
};

function showState(state) {
  $('body').append("Day : " + state.day + EOL);
  $('body').append("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,') + EOL);
}

function showEvents(events) {
  $('body').append(_.map(events, function(event, index) {
    return showEvent(event, index);
  }).join(EOL) + EOL);
}

function showEvent(event, index) {
  return index + " > Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', ');
}
