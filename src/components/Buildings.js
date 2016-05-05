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
              <div key={index} title={building.description}>
                &nbsp;&nbsp;&nbsp;&nbsp;{building.name + ' (' + building.cost + ' gold)'}
              </div>
          )
        })
      }
      </span>
    );
  }
})
