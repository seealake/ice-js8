/*
  The n-th term of the fibonacci sequence is defined as:
  fib(0) := 1
  fib(1) := 1
  fib(n) := fib(n-1) + fib(n-2)

  Sequence:
  1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*/

function fib(n) {
  // your code here
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0)); // should be 1
console.log(fib(1)); // should be 1
console.log(fib(2)); // should be 2
console.log(fib(3)); // should be 3
console.log(fib(4)); // should be 5
console.log(fib(5)); // should be 8
