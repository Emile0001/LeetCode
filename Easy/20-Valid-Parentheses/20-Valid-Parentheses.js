// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    const stack = [];
    const bracketsMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const currentBracket = s[i];

        if (bracketsMap[currentBracket]) {
            // If it's an open bracket, push it onto the stack
            stack.push(currentBracket);
        } else {
            // If it's a close bracket, check if it matches the last open bracket
            const lastOpenBracket = stack.pop();

            if (currentBracket !== bracketsMap[lastOpenBracket]) {
                // If not, the string is not valid
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were closed correctly
    return stack.length === 0;
};

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
