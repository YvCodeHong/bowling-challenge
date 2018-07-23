'use strict';

describe ('Frame', function () {

  var frame;

beforeEach(function() {
  frame = new Frame()
});

describe("#rollOne", function() {
  it("records the first roll", function() {
    frame.setRollOne(3)
    expect(frame.getRollOne()).toEqual(3)
  })
})

describe("#rollTwo", function() {
  it("records the second roll", function() {
    frame.setRollTwo(5)
    expect(frame.getRollTwo()).toEqual(5)
  });
});

describe("#bonus", function() {
  it("stores the bonus score", function() {
    frame.setBonus(7)
    expect(frame.getBonus()).toEqual(7)
  })
})

describe("#totalofAllRolls", function() {
  it("total of roll 1, 2, and bonus", function(){
    frame.setRollOne(3)
    frame.setRollTwo(5)
    frame.setBonus(7)
    expect(frame.totalofAllRolls()).toEqual(15)
  });
});
});







// describe('is strikes', function() {
//   it('should return true'. function() {
//     frame.addScore(10);
//     expect(frame.isStrike()).toEqual (10);
//   });
//
//
// })
