module.exports = Mine;

function Mine() {
  this.name = 'mine';
  this.description = 'Generates&nbsp;1&nbsp;[gold]&nbsp;per&nbsp;[day]';
  this.cost = 0;
}

Mine.prototype.onTurnStart = function(state) {
  state.gold == null ? state.gold = 1 : state.gold += 1;
  return state;
}
