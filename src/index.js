var Game = require('./Game/Game');
var Event = require('./Game/Event')();

var Render = require('./Render/Dom');

var state;
var events;

Render.init(function(event) {
  state = Game.step(state, event);
  Render.showState(state);

  events = Event.create(state);
  Render.showEvents(events);
});

state = Game.start();
Render.showState(state);

events = Event.create(state);
Render.showEvents(events);
