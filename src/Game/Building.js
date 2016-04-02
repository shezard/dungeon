var _ = require('lodash');

var buildings = {
  barrack: {
    name: 'barrack',
    cost: 5
  }, mine: {
    name: 'mine',
    description: 'Generates 1 [gold] per [day]',
    cost: 0
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

  return _.clone(buildings[name]);
}
