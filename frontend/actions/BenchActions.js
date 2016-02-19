var Dispatcher = require('../dispatcher/Dispatcher');
var BenchConstants = require('../constants/bench_constants');
ApiActions = {
  receiveAll: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
}

module.exports = ApiActions;
