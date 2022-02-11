/**
 * @param {number} n
 * @return {number}
 */

const cache = {
    1: 1,
    2: 2,
}

var climbStairs = function(n) {
    if (cache[n]) {
        return cache[n];
    }
    
    cache[n] = climbStairs(n-1) + climbStairs(n-2);
    return cache[n];
};

// Fib sequence
// Basically, n = n - 1 + n - 2
//
// Stumbling blocks:
// You tried recursion typically, but that's a bit too slow because is 2^n functions
// Solved with memoisation
