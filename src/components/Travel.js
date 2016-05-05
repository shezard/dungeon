var React = require('react');

module.exports = React.createClass({
  render: function() {
    if(!this.props.travel) {
      return null;
    }
    return (
      <span>
        Go {this.props.travel}
      </span>
    )
  }
});
