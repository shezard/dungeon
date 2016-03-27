var State = require('./State');

module.exports = {
  create: create
}

function create(state) {

  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  return {
    level: 0,
    hp: 2,
    attack: 1,
  }
}
