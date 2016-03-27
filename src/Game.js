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

  if(!state || state.level == null || state.level < 0) {
    throw new Error('Invalid state');
  }

  return {
    level: state.level + 1
  }
}
