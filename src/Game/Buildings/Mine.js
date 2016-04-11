var _ = require('lodash');
var Skills = require('../Skills');

var mine = {
  name: 'mine',
  cost: 0,
  skills: ['makeGold']
}

module.exports = Skills.addTo(mine);
