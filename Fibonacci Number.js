// Recursion
var fib = function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

// Dynamic Programming
var fib = function (n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
};

console.log(fib(10));
