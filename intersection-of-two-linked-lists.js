/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} nodeA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const seen = new Set();
    let nodeA = headA;
    let nodeB = headB;
    
    while (nodeA || nodeB) {
        if (seen.has(nodeA)) {
            return nodeA;
        } else {
            if (nodeA) {
                seen.add(nodeA);
                nodeA = nodeA.next;
            }
        }
        
        if (seen.has(nodeB)) {
            return nodeB;
        } else {
            if (nodeB) {
                seen.add(nodeB);
                nodeB = nodeB.next;
            }
        }
    }
    
    return null;
};
