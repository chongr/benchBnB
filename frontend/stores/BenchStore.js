var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var _benches = [];
var BenchStore = new Store(Dispatcher);

BenchStore.all = function () {
  return _benches.slice();
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
