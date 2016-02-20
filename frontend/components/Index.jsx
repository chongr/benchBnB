var React = require('react');
var BenchStore = require('../stores/BenchStore');
var ApiUtil = require('../util/ApiUtil');

var Index = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all()};
  },

  componentDidMount: function () {
    this.token = BenchStore.addListener(this.updated);
  },

  componentWillUnmount: function () {
    this.token.remove();
  },

  updated: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function() {
    var allBenches = this.state.benches.map(function (bench) {
      return (<ul key={bench.id}>{bench.description}
        <li>{bench.lat}</li>
        <li>{bench.long}</li>
      </ul>);
    });
    return (
      <div>
        {allBenches}
      </div>
    );
  }

});

module.exports = Index;
