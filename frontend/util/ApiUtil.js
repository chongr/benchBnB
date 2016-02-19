var BenchActions = require('../actions/BenchActions');

var ApiUtil = {
  fetchBenches: function () {
    $.get("/benches", function (data) {
      BenchActions.allBenches(data);
    });
  }
};

module.exports = ApiUtil;
