var _ = require('lodash');
var Skills = require('../Skills');

var farm = {
  name: 'farm',
  cost: 3,
  skills: ['makePaysan']
}

module.exports = Skills.addTo(farm);
