var _ = require('lodash');

module.exports = function(buildings, newBuildings) {

  var gold = 0;


  _.each(newBuildings, function(building) {
    gold -= building.cost;
    buildings.push(building);
  });

  return {
    buildings: buildings,
    gold: gold
  }
}
