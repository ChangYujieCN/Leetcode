/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (numbers, target) => {
  const hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const remaining= target - numbers[i];
    if (hash.has(remaining)) return [i, hash.get(remaining)];
    hash.set(numbers[i], i);
  }
};









