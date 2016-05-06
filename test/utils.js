var _ = require('lodash');

module.exports = {
  summarize: summarize
};

function summarize(state) {

  var events = state.events || state;

  if(!_.isArray(events)) {
    return _summarize(events);
  }

  return _.map(events, _summarize);
}

function _summarize(event) {
  var summary = {};
  var itemsToSummarize = ['friends', 'buildings', 'foes'];

  _.each(itemsToSummarize, function(item) {
    if(event[item] && event[item].length) {
      summary[item] = _.map(event[item], 'name');
    }
  });

  return summary;
}
