var React = require('React');

var Units = require('./Units');
var Buildings = require('./Buildings');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        Day: {this.props.state.day} | Gold: {this.props.state.gold || 0 }<br/>
        {this.props.state.message}<br/>
        <Units units={this.props.state.friends || []} prefix={'Units'}/><br/>
        <Buildings buildings={this.props.state.buildings || []} />
      </div>
    );
  }
});
