var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <span>
      {
        this.props.buildings.length ? 'Buildings: ' : ''
      }
      {
        this.props.buildings.map(function(building, index) {
          return(
              <span key={index} title={building.description}>
                {building.name + ' (' + building.cost + ' gold)'}
              </span>
          )
        })
      }
      </span>
    );
  }
})
