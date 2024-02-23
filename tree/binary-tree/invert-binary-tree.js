// https://leetcode.com/problems/invert-binary-tree/
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
var invertTree = function(node) {
    if(!node)
        return node;

    const tempRightVal = node.left
    node.left = node.right;
    node.right = tempRightVal;
    invertTree(node.left)
    invertTree(node.right)
    // console.log(node)
    return node;
};

var invertTree = function(node) {
    if(!node)
        return node;

    const tempLefttVal = node.left;
    node.left = invertTree(node.right);
    node.right = invertTree(tempRightVal);
    
    return node;
};