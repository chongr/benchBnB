var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');
var BenchConstants = require('../constants/bench_constants');

var _benches = [];
var _diff = [];
var BenchStore = new Store(Dispatcher);

BenchStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case BenchConstants.BENCHES_RECEIVED:
    removedBenches(payload.benches);
    resetBenches(payload.benches);
    BenchStore.__emitChange();
    break;
  }
};

BenchStore.all = function () {
  return _benches.slice();
};

BenchStore.removedBenches = function () {
  return _diff.slice();
};

var removedBenches = function(newBenches) {

};

var resetBenches = function(benches){
  _benches = benches;
};

module.exports = BenchStore;
