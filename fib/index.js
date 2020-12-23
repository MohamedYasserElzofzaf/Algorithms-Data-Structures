// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// method 3
function memoize(fb) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fb.apply(this, args);
        cache[args] = result;
        return result;
    };
}
// method2
function slowfib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowfib);
module.exports = fib;

// function fib(n) {
//   var result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     var a = result[i - 1];
//     var b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }