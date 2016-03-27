module.exports = {
  isValid: isValid,
  invalid: invalid,
}

function isValid(state) {
  return !(!state || state.level == null || state.level < 0);
}

function invalid() {
  return new Error('Invalid state');
}
