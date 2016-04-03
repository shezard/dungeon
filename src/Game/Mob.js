var units = {
  paysan: require('./Mobs/Paysan'),
  soldier: require('./Mobs/Soldier'),
  thief: require('./Mobs/Thief'),
  skeleton: require('./Mobs/Skeleton'),
  goblin: require('./Mobs/Goblin'),
  goblinBerserker: require('./Mobs/GoblinBerserker'),
  goblinWarrior: require('./Mobs/GoblinWarrior')
}

module.exports = {
  create: create
}

function create(name) {
  if(!name) {
    throw new Error('Empty mob id');
  }

  if(!units[name]) {
    throw new Error('Invalid mob id: ' + name);
  }

  return _.clone(units[name]);
}
