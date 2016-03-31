var buildings = {
  barrack: function() {
    return {
      name: 'barrack',
      cost: 5
    }
  }
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

  return buildings[name]();
}
