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
    },
    heal: function() {
      return {
        description: 'At the beginning of your turn heal 1 [hp] to all units',
        onTurnStart: function(state) {
          state.friends = _.map(state.friends, function(friend) {
            friend.hp = Math.min(friend.hp + 1, friend.maxHp);
            return friend;
          });
          return state;
        }
      }
    }
  };

  return {
    addTo: function(thing) {
      var thingSkills = _.map(thing.skills, function(skill) {
        if(!skills[skill]) {
          throw new Error('invalid skill id: ' + skill);
        }
        return skills[skill]();
      });
      return _.assign(thing, thingSkills[0]);
    }
  }
}
