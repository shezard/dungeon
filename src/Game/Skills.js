//var Mob = require('./Mob');
var _ = require('lodash');

module.exports = function(Mob) {

  var skills = {
    makeGold: function() {
      return {
        description: 'Generates 1 [gold] per [day]',
        onTurnStart: function(state) {
          state.gold == null ? state.gold = 1 : state.gold += 1;
          return state;
        }
      }
    },
    makePaysan: function() {
      return {
        description: 'Generate 1 [paysan] per [day]',
        onTurnStart: function(state) {
          var paysan = Mob.create("paysan");
          state.friends == null ? state.friends = [paysan] : state.friends.push(paysan);
          return state;
        }
      }
    }
  };

  return {
    addTo: function(thing) {
      var thingSkills = _.map(thing.skills, function(skill) {
        return skills[skill]();
      });

      return _.assign(thing, thingSkills[0]);
    }
  }
}
