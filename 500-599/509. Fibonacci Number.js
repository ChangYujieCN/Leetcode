/**
 * @param {number} N
 * @return {number}
 */
//
var fib = function(N) {
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};

// time O(2^n) since T(n) = T(n-1) + T(n-2)is an exponential time
// space O(n) space for recursive funtion call stack

var fib2 = function(N) {
  if (N <= 1) return N;
  let a = 0,
    b = 1,
    sum;
  while (N-- > 1) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return b;
};
