var React = require('react');

var Units = require('./Units');
var Buildings = require('./Buildings');
var Travel = require('./Travel');

var Event = require('../Game/Event')();

class Events extends React.Component {
  render() {
    var day = Event.create(this.props.state);
    return (
      <div>
        <div>
          { day.message }
        </div>
        { day.events.map((event, index) => {
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
              <Travel travel={event.travel} />
            </div>
          );
        }) }
      </div>
    );
  }
}

module.exports = Events;
