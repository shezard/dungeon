var buildings = {
  barrack: require('./Buildings/Barrack'),
  mine: require('./Buildings/Mine')
};

module.exports = {
  create: create
};

function create(name) {
  if(!name) {
    throw new Error('Empty building id');
  }

  if(!buildings[name]) {
    throw new Error('Invalid building id: ' + name);
  }

  return new buildings[name]();
}
