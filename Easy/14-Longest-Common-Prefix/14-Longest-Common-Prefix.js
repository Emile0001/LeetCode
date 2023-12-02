// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return ""; // Empty array, no common prefix.
    }

    // Iterate through characters of the first string.
    for (let i = 0; i < strs[0].length; i++) {
        const currentChar = strs[0][i];

        // Check the current character against the same position in other strings.
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== currentChar) {
                // If mismatch or end of any string is reached, return the prefix.
                return strs[0].substring(0, i);
            }
        }
    }

    // If no mismatch is found, the entire first string is the common prefix.
    return strs[0];
};

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
