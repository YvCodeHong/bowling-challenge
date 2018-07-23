'use strict';

function Frame () {
  this.frame = 0
  this.rolls = {
    1: 0,
    2: 0,
    bonus: 0
  }
}

Frame.prototype._frame = function() {
  return this.frame
}

Frame.prototype.getRollOne = function() {
  return this.rolls[1]
}

Frame.prototype.getRollTwo = function() {
  return this.rolls[2]
}

Frame.prototype.getBonus = function() {
  return this.rolls['bonus']
}

Frame.prototype.setRollOne
