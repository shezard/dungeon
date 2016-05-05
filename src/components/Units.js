var React = require('react');

module.exports = React.createClass({
  render: function() {

    var prefix = '';
    if(this.props.units.length) {
      prefix = this.props.prefix + ': ';
    }

    return (
      <span>
        { prefix }
        {
          this.props.units.map(function(unit, index) {

            var name = unit.name.charAt(0).toUpperCase() + unit.name.slice(1);

            return (
              <div key={index}>
                &nbsp;&nbsp;&nbsp;&nbsp;{name} (<span className="ra  ra-crossed-swords" />{unit.attack} - {unit.hp}/{unit.maxHp}<span className="ra ra-hearts" />)
              </div>
            );
          })
        }
      </span>
    );
  }
})
