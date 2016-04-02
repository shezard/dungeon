module.exports = {
  name: 'mine',
  description : 'Generates 1 [gold] per [day]',
  cost: 0,
  onTurnStart: function(state) {
    state.gold == null ? state.gold = 1 : state.gold += 1;
    return state;
  }
}
