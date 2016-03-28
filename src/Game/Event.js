var Mob = require('./Mob');

module.exports = function() {
  return {
    create: create
  };  
};

function create(state) {
  return {
    foes: [Mob.create('skeleton')]
  }
}
