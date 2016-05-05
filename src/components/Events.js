var React = require('react');

var Units = require('./Units');
var Buildings = require('./Buildings');

var Event = require('../Game/Event')();

module.exports = React.createClass({
  render: function() {
    var events = Event.create(this.props.state);
    return (
      <div>
        { events.map((event, index) => {
          var onClick = function() {};
          var textDecoration = 'line-through';
          if(event.isValid) {
            onClick = this.props.handleClick.bind(null, event);
            textDecoration = 'none';
          }
          return (
            <div key={index} onClick={onClick} style={{textDecoration: textDecoration}}>
              { index + 1 } >&nbsp;
              <Units units={event.foes} prefix={'Fight'}/>
              <Units units={event.friends} prefix={'Hire'} />
              <Buildings buildings={event.buildings} />
            </div>
          );
        }) }
      </div>
    );
  }
});
