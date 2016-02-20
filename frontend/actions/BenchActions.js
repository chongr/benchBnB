var Dispatcher = require('../dispatcher/Dispatcher');
var BenchConstants = require('../constants/bench_constants');

var BenchActions = {
  receiveAll: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = BenchActions;
