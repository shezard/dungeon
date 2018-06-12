var React = require('react');

class Buildings extends React.Component {
  render() {
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
}

module.exports = Buildings;
