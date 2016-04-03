var Mob = require('../Mob');

module.exports = {
  name: 'farm',
  description: 'Generate 1 [paysan] per [day]',
  cost: 3,
  onTurnStart: function(state) {
    var paysan = Mob.create('paysan');
    state.friends == null ? state.friends = [paysan] : state.friends.push(paysan);
    return state;
  }
}
