var units = {
  skeleton: {
    hp: 2,
    attack: 1
  }
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

  return units[name];
}
