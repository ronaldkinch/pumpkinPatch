var PumpkinPatch = function(name, count) {
  this.name = name;
  this.count = count;
}

// object prototype
PumpkinPatch.prototype.pumpkinsLeft = function() {
  return this.count;
}

module.exports = PumpkinPatch;
