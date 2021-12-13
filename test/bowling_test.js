const { expect } = require('chai');

function calculateScore(rolls) {
   let score = 0;

   for(let i = 0 ; i<rolls.length ; i += 2 ){
      if(rolls[i] + rolls[i+1] == 10){
         score += 10 + rolls[i+2];
      } else {
         score += rolls[i] + rolls[i+1];
      }
   }

   return score;
}

// (When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)
// -- -- -- -- -- -- -- -- -- --
// 9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
// 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
// X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300

context('bowling score', function() {
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

   it('should obtain a score of 14 with a spare', function() {
      // given
      const rolls = [5, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // when
      const score = calculateScore(rolls);

      // then
      expect(score).to.equal(14);
   });

   it('should obtain a score of 14 too with a spare', function() {
      // given
      const rolls = [6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // when
      const score = calculateScore(rolls);

      // then
      expect(score).to.equal(14);
   });

   it('should obtain a score of 22 with a different bonus with a spare', function() {
      // given
      const rolls = [6, 4, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // when
      const score = calculateScore(rolls);

      // then
      expect(score).to.equal(22);
   });

   it('should obtain a score of 14 with a spare on second frame with a spare', function() {
      // given
      const rolls = [0, 0, 5, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // when
      const score = calculateScore(rolls);

      // then
      expect(score).to.equal(14);
   });

   it('should obtain a score of 23 with a spare on second frame with a spare', function() {
      // given
      const rolls = [0, 0, 5, 5, 2, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      // when
      const score = calculateScore(rolls);

      // then
      expect(score).to.equal(23);
   });
});
