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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return reverse(root);
};

const reverse = (root) => {
    if (!root) {
        return root;
    }
    
    if (!root.left && !root.right) {
        return root;
    }
    
    let left = root.left;
    let right = root.right;
    
    root.left = reverse(right);
    root.right = reverse(left);
    
    return root;
}
