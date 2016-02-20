var React = require('react');
var BenchStore = require('../stores/BenchStore');
var ApiUtil = require('../util/ApiUtil');

var Map = React.createClass({
  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.token = BenchStore.addListener(this.updatePoints);
    this.idleToken = google.maps.event.
    addListener(this.map, 'idle', this.mapIdle);
  },

  mapIdle: function () {
    var bounds = this.map.getBounds();
    var queryString = {
      "northEast": {lat: bounds.getNorthEast().lat(),
                    lng: bounds.getNorthEast().lng()},
      "southWest": {lat: bounds.getSouthWest().lat(),
                    lng: bounds.getSouthWest().lng()}
    };
    ApiUtil.fetchBenches(queryString);
  },

  updatePoints: function () {
    var allBenches = BenchStore.all();
    var that = this;

    allBenches.forEach(function(bench) {
      var pos = new google.maps.LatLng(bench.lat, bench.long);
      var marker = new google.maps.Marker({
        position: pos,
        map: that.map
      });
      this.shownMarkers.push({
        lat: bench.lat,
        long: bench.long,
        marker: marker
      });
    });
  },

  render: function() {
    var mapStyle = {
      width: 500,
      height: 500
    };

    return (
      <div style={mapStyle} clasName="map" ref="map">
      </div>
    );
  }

});

module.exports = Map;
