var Game = require('./Game/Game');
var Event = require('./Game/Event');

var Render = require('./Render/Console');

var state = Game.start();
Render.state(state);

var event = Event.create(state);
Render.event(event);

state = Game.step(state, event);
Render.state(state);

var event = Event.create(state);
Render.event(event);

state = Game.step(state, event);
Render.state(state);
