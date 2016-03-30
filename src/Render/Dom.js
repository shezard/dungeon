var _ = require('lodash');
var $ = require('jquery');

var EOL = '<br/>';

module.exports = {
  init: init,
  showState: showState,
  showEvents: showEvents
};

function init(step) {
  $('body').on('click', '.event', function() {
    var event = JSON.parse($(this).attr('data-event'));
    step(event);
  });
};

function showState(state) {
  $('body').append("Day : " + state.day + EOL);
  $('body').append("Units : " + _.map(state.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(' ,') + EOL);
}

function showEvents(events) {
  $('body').append(_.map(events, function(event, index) {
    return '<span class="event" data-event=' + JSON.stringify(event) + '>' + showEvent(event, index) + '</span>';
  }).join(EOL) + EOL);
}

function showEvent(event, index) {

  var events = '';

  if(event.foes && event.foes.length) {
    events += showFight(event, index);
  }

  if(event.friends && event.friends.length) {
    events += showJoin(event, index);
  }

  return events;
}

function showFight(event, index) {
  return index + " > Fight : " + _.map(event.foes, function(foe) {
    return foe.name + ' (' + foe.attack + '/' + foe.hp + ')'
  }).join(', ');
}

function showJoin(event, index) {
  return index + " > Join : " + _.map(event.friends, function(friend) {
    return friend.name + ' (' + friend.attack + '/' + friend.hp + ')'
  }).join(', ');
}
