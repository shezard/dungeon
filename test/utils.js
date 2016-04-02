var _ = require('lodash');

module.exports = {
  summarize: summarize
};

function summarize(state) {

  if(!_.isArray(state)) {
    return _summarize(state);
  }

  return _.map(state, _summarize);
}

function _summarize(state) {
  var summary = {};
  var itemsToSummarize = ['friends', 'buildings', 'foes'];

  _.each(itemsToSummarize, function(item) {
    if(state[item] && state[item].length) {
      summary[item] = _.map(state[item], 'name');
    }
  });

  return summary;
}
