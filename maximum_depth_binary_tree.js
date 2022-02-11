/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const findDepth = (node, depth) => {
        if (!node) {
            return depth;
        }
        
        depth += 1;
        
        return Math.max(findDepth(node.left, depth), findDepth(node.right, depth));
    }
    
    return Math.max(findDepth(root.left, 1), findDepth(root.right, 1));
};

