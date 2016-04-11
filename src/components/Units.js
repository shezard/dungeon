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
          this.props.units.map(function(unit) {
            return (
              <span>
                {unit.name} (<span className="" />{unit.attack} - <span className="" />{unit.hp}/{unit.maxHp})
              </span>
            );
          })
        }
      </span>
    );
  }
})
