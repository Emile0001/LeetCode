// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";
    let carry = 0;

    // Start from the rightmost bits
    let i = a.length - 1;
    let j = b.length - 1;

    // Iterate until both strings are processed
    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the current bits from both strings (or 0 if no more bits)
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;

        // Calculate the sum of the bits and the carry
        const sum = bitA + bitB + carry;

        // Calculate the new carry for the next iteration
        carry = Math.floor(sum / 2);

        // Calculate the current bit in the result
        const currentBit = sum % 2;

        // Prepend the current bit to the result
        result = currentBit + result;

        // Move to the next bits towards the left
        i--;
        j--;
    }

    return result;
};

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
