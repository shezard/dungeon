module.exports = {
  isValid: isValid,
  invalid: invalid,
}

function isValid(state) {
  return !(!state || state.day === null || state.day === undefined || state.day < 0);
}

function invalid() {
  return new Error('Invalid state');
}
