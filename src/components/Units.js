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
            return unit.name + ' (' + unit.attack + '/' + unit.hp + ') ';
          })
        }
      </span>
    );
  }
})
