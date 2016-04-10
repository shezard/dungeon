var Mob = require('./Mob');

module.exports = {
  makeGold: function(amount) {
    return {
      description: 'Generates ' + amount + ' [gold] per [day]',
      onTurnStart: function(state) {
        state.gold == null ? state.gold = amount : state.gold += amount;
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
}
