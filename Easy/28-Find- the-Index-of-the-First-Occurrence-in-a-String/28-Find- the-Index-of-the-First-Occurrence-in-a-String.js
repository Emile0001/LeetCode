// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // Handle edge case where needle is an empty string
    if (needle === "") {
        return 0;
    }

    // Iterate through the haystack string
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if a substring of haystack matches the needle
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Return the index if a match is found
        }
    }

    return -1; // Return -1 if no match is found
};

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
