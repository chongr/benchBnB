var BenchActions = require('../actions/BenchActions');

var ApiUtil = {
  fetchBenches: function (queryString) {
    $.get("/benches", {bounds: queryString}, function (data) {
      BenchActions.receiveAll(data);
    });
  }
};

module.exports = ApiUtil;
