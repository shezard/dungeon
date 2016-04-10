var React = require('react');

var Game = require('../Game/Game.js');

var State = require('./State');
var Events = require('./Events');

module.exports = React.createClass({
  getInitialState: function() {
    return Game.start();
  },
  handleClick: function(event) {
    this.setState(Game.step(this.state, event));
  },
  render: function() {
    return (
      <div>
        <State state={this.state} />
        <br/>
        <Events state={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
});
