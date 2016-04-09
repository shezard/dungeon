var React = require('React');

module.exports = React.createClass({
  render: function() {
    return (
      <span>
      {
        this.props.units.length ? 'Units: ' : '' 
      }
      {
        this.props.units.map(function(unit) {
          return unit.name + ' (' + unit.attack + '/' + unit.hp + ') ';
        })
      }
      </span>
    );
  }
})
