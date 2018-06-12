var React = require('react');

class Travel extends React.Component {
  render() {
    if(!this.props.travel) {
      return null;
    }
    return (
      <span>
        Go {this.props.travel}
      </span>
    )
  }
}

module.exports = Travel;
