/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
  const greatest = Math.max(...candies);
  return candies.map((item) => item + extraCandies >= greatest);
};
