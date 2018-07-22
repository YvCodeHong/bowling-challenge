'use strict';

function Frame () {

  var frame;

beforeEach(function() {
  frame = new Frame();
};

it('Creates a empty frame', function() {
    expect(frame.frame()).toEqual(0)
  })
})

// it('takes the result of the first roll', function() {
//   frame.addscore(5);
//   expect(frame.rollScores[0]).toEqual(5);
// })
})
