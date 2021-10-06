/**
 * @param {number[]} bits
 * @return {boolean}
 * 检查最后一位必定是独立的0
 */
//1. if there is only one symbol in array the answer is always true (as last element is 0)
//2. if there are two 0s at the end again the answer is true no matter what the rest symbols are( ...1100, ...1000,)
//3. if there is 1 right before the last element(...10), the outcome depends on the count of sequential 1, i.e.
//     a) if there is odd amount of 1(10, ...01110, etc) the answer is false as there is a single 1 without pair
// b) if it's even (110, ...011110, etc) the answer is true, as 0 at the end doesn't have anything to pair with
const isOneBitCharacter = function(bits) {
  let ones = 0;
  for (let i = bits.length - 2; i >= 0 && bits[i] !== 0; i--) ones++;
  return ones % 2 === 0;
};
