// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    // Initialize an array to store the number of ways to reach each step.
    const ways = new Array(n + 1);

    // Base cases: there are 1 way to reach the first step and 2 ways to reach the second step.
    ways[1] = 1;
    ways[2] = 2;

    // Calculate the number of ways for each step starting from the third step.
    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    // The final result is the number of ways to reach the top step.
    return ways[n];
};

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
