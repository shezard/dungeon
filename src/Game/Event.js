var Mob = require('./Mob');

module.exports = {
  create: create
};

function create(state) {
  return {
    foes: [Mob.create('skeleton')]
  }
}
