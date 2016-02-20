var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/BenchStore');
var ApiUtil = require('./util/ApiUtil');
var Search = require('./components/Search');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search/>,
    document.getElementById('content')
  );
});
