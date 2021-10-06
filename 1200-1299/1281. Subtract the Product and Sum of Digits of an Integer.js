/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  const arr = [...String(n)].map(Number);
  // const arr = Array.from(String(n), Number);
  const product = arr.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
  const sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return product - sum;
};
