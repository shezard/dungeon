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
    var eventIndex = $(this).attr('data-event-index');
    $('body').empty();
    step(eventIndex);
  });
};

function showState(state) {
  $('body').append("Day : " + state.day + EOL);
  if(state.message) {
    $('body').append(state.message + EOL);
  }
  $('body').append("Gold: " + (state.gold || 0) + EOL);
  $('body').append("Units : " + _.map(state.friends, function(friend) {
    return showUnit(friend);
  }).join(' ,') + EOL);
  if(state.buildings && state.buildings.length) {
    $('body').append("Buildings : " + _.map(state.buildings, function(building) {
      return building.name + ' (' + building.description +')'
    }).join(', ') + EOL);
  }
  $('body').append(EOL);
}

function showEvents(events) {
  $('body').append(_.map(events, function(event, index) {

    if(event.isValid) {
      return '<span class="event" data-event-index=\'' + index + '\'>' + showEvent(event, index) + '</span>';
    } else {
      return '<span style="text-decoration:line-through">' + showEvent(event, index) + '</span>';
    }

  }).join(EOL) + EOL);
}

function showEvent(event, index) {

  var events = '';

  if(event.foes && event.foes.length) {
    events += showBattle(event, index);
  }

  if(event.friends && event.friends.length) {
    events += showJoin(event, index);
  }

  if(event.buildings && event.buildings.length) {
    events += showConstruct(event, index);
  }

  return events;
}

function showBattle(event, index) {
  return index + " > Fight : " + _.map(event.foes, function(foe) {
    return showUnit(foe);
  }).join(', ');
}

function showJoin(event, index) {
  return index + " > Hire : " + _.map(event.friends, function(friend) {
    return showUnit(friend);
  }).join(', ');
}

function showConstruct(event, index) {
  return index + " > Build : " + _.map(event.buildings, function(building) {
    return building.name + ' (' + building.cost + ' gold)'
  }).join(', ');
}

function showUnit(unit) {
  return unit.name + ' (<span class="rpg-Icon1_55" />' + unit.attack + ' / ' + unit.hp + '<span class="rpg-Icon1_88" />)'
}
