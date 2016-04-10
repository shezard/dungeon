var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <span>
      {
        this.props.buildings.length ? 'Buildings: ' : ''
      }
      {
        this.props.buildings.map(function(building) {
          return building.name + ' (' + building.cost + ' gold)';
        })
      }
      </span>
    );
  }
})
