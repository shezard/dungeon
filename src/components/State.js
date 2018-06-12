var React = require('react');

var Units = require('./Units');
var Buildings = require('./Buildings');

class State extends React.Component {
  render() {
    return (
      <div>
        Day: {this.props.state.day} | Gold: {this.props.state.gold || 0 }<br/>
        {this.props.state.message}<br/>
        <Units units={this.props.state.friends || []} prefix={'Units'}/><br/>
        <Buildings buildings={this.props.state.buildings || []} />
      </div>
    );
  }
}

module.exports = State;
