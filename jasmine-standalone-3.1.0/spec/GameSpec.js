'use strict';

describe('Game', function () {

  var game;

  beforeEach(function() {
    game = new Game ()
})

 describe('create an empty total score', function () {
   it ('has a total score of 0', function () {
     expect(game._totalscore()).toEqual(0)
   })
})
})
