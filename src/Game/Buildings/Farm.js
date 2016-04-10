var _ = require('lodash');
var Skills = require('../Skills');

var farm = {
  name: 'farm',
  cost: 3,
  skills: ['makePaysan']
}

var skills = _.map(farm.skills, function(skill) {
  return Skills[skill]();
});

module.exports = _.assign(farm, ...skills);
