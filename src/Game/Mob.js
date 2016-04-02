var _ = require('lodash');

var units = {
  soldier: {
    name: 'soldier',
    hp: 3,
    attack: 1
  },
  skeleton: {
    name: 'skeleton',
    hp: 2,
    attack: 1,
    gold: 2
  },
  goblin: {
    name: 'goblin',
    hp: 1,
    attack: 1,
    gold: 1
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

  return _.clone(units[name]);
}
