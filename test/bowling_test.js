const { expect } = require('chai');

function calculateScore(rolls) {
   let score = 0;
   for(const roll of rolls) {
      score += roll;
   }
   return score;
}

// (When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)
// -- -- -- -- -- -- -- -- -- --
// 9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
// X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
// 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150

it('should obtain a score of 0 for all missed throws', function() {
   // given
   const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

   // when
   const score = calculateScore(rolls);

   // then
   expect(score).to.equal(0);
});

it('should obtain a score of 90', function() {
   // given
   const rolls = [9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0];

   // when
   const score = calculateScore(rolls);

   // then
   expect(score).to.equal(90);
});
