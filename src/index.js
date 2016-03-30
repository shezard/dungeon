var Game = require('./Game/Game');
var Event = require('./Game/Event')();

var Render = require('./Render/Dom');

var state = Game.start();
Render.showState(state);

var events = Event.create(state);
Render.showEvents(events);

state = Game.step(state, events[0]);
Render.showState(state);

var events = Event.create(state);
Render.showEvents(events);

state = Game.step(state, events[0]);
Render.showState(state);
