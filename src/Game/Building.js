var _ = require('lodash');
var Skills = require('./Skills')(require('./Mob'));

var buildings = {
  barrack: require('./Buildings/Barrack'),
  mine: require('./Buildings/Mine'),
  farm: require('./Buildings/Farm')
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

  var building = _.clone(buildings[name]);

  console.log(Skills.addTo(building));

  return Skills.addTo(building);
}
