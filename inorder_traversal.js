/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  var list = [];
  helper(root, list);
  return list;
};

var helper = function (root, list) {
  if (!root) {
    return;
  }

  if (root.left) {
    helper(root.left, list);
  }

  list.push(root.val);

  if (root.right) {
      helper(root.right, list)
  };
};

// What is Inorder Traversal?
//
// Inorder traversal is one of the ways we can traverse a binary search tree (BST).
//
// The order is Left-Root-Right.
//
// We traverse to leftmost leaf, and note it's value, then root, then right leaf.
// Repeat for each subtree within the left branch.
// Note the root.
// Repeat for each subtree within the right branch.
//
// Iterative Approach uses a stack, where we traverse in the same way, adding to the stack
// each time. We then can push to our result list as we pop each element off the stack,
// all the while checking whether there is a right node as we traverse the tree. If we find
// a right node, we repeat the traversal for that right node's left leaf.
//
// Repeat while there is no root node.
