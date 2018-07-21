'use strict';

function Game () {
  this.totalscore = 0;
  this.frame = 0
}

Game.prototype._totalscore = function() {
  return this.totalscore
}

Game.prototype._frame = function() {
  return this.frame
}
