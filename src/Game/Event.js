var Mob = require('./Mob');

var days = [
  [{
    foes: [Mob.create('goblin')]
  }, {
    foes: [Mob.create('skeleton')]
  }],
  [{
    friends: [Mob.create('soldier')]
  }],
  [{
    foes: [Mob.create('goblin')]
  }, {
    foes: [Mob.create('skeleton')]
  }]
];

module.exports = function() {
  return {
    create: create
  };
};

function create(state) {
  return days[state.day];
}
