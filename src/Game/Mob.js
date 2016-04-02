var units = {
  soldier: require('./Mobs/Soldier'),
  skeleton: require('./Mobs/Skeleton'),
  goblin: require('./Mobs/Goblin'),
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

  return new units[name]();
}
