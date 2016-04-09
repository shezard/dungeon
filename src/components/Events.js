var React = require('React');

var Units = require('./Units');
var Buildings = require('./Buildings');

var Event = require('../Game/Event')();

module.exports = React.createClass({
  render: function() {
    var events = Event.create(this.props.state);
    return (
      <div>
        { events.map((event, index) => {
          return (
            <div key={index} onClick={this.props.handleClick.bind(null, event)}>
              { index + 1 } >
              <Units units={event.foes} />
              <Units units={event.friends} />
              <Buildings buildings={event.buildings} />
            </div>
          );
        }) }
      </div>
    );
  }
});
