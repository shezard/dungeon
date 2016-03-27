var State = require('./State');

module.exports = {
  start: start,
  step: step,
};

function start() {
  return {
    level: 0
  };
}

function step(state) {
  if(!State.isValid(state)) {
    throw new State.invalid();
  }

  return {
    level: state.level + 1
  }
}
