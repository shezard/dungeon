var React = require('react');

var Game = require('../Game/Game.js');

var State = require('./State');
var Events = require('./Events');

class GameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = Game.start();
  };

  handleClick = (event) => {
    this.setState(Game.step(this.state, event));
  };

  render() {
    return (
      <div>
        <State state={this.state} />
        <br/>
        <Events state={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
}

module.exports = GameComponent;
