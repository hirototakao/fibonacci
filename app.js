'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
  if (memo.has(n)) {
    console.log(`Here's a calculated ${n}.`);
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  console.log(memo);
  return value;
}
const length = 10;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}