var _ = require('lodash');
var Skills = require('./Skills')(require('./Mob'));

var mobs = {
  paysan: require('./Mobs/Paysan'),
  soldier: require('./Mobs/Soldier'),
  thief: require('./Mobs/Thief'),
  skeleton: require('./Mobs/Skeleton'),
  goblin: require('./Mobs/Goblin'),
  goblinBerserker: require('./Mobs/GoblinBerserker'),
  goblinWarrior: require('./Mobs/GoblinWarrior'),
  goblinWarlock: require('./Mobs/GoblinWarlock')
}

module.exports = {
  create: create
}

function create(name) {
  if(!name) {
    throw new Error('Empty mob id');
  }

  if(!mobs[name]) {
    throw new Error('Invalid mob id: ' + name);
  }

  var mob = _.clone(mobs[name]);

  mob.maxHp = mob.hp;

  return Skills.addTo(mob);
}
