// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // Check if the list is empty or has only one node
    if (!head || !head.next) {
        return head;
    }

    // Start from the head of the list
    let current = head;

    // Traverse the list
    while (current.next !== null) {
        // Compare the current node's value with the next node's value
        if (current.val === current.next.val) {
            // If they are equal, update the next pointer to skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to the next node if no duplicate is found
            current = current.next;
        }
    }

    return head;
};
