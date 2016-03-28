var Game = require('./Game/Game');
var Mob = require('./Game/Mob');

var Render = require('./Render/Console');

var state = Game.start();
Render.state(state);

var event = {
  foes : [Mob.create('skeleton')]
};
Render.event(event);

state = Game.step(state, event);
Render.state(state);

var event = {
  foes : [Mob.create('skeleton')]
};
Render.event(event);

state = Game.step(state, {
  foes : [Mob.create('skeleton')]
});
Render.state(state);
