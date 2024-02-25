// https://leetcode.com/problems/merge-two-binary-trees/

var mergeTrees = function(node1, node2) {
    if(!node1 && !node2)
        return node1;

    const newNode = (node1?.val || 0) + (node2?.val || 0);
    const newNodeleft = mergeTrees(node1?.left, node2?.left);
    const newNoderight = mergeTrees(node1?.right, node2?.right);
    const newTree = new TreeNode(newNode, newNodeleft, newNoderight)

    return newTree;
};

/**
 * In above example, we are creating new tree but there is no need for it, 
 * This code has less space complexity then above code
 * @param {*} root1 
 * @param {*} root2 
 * @returns 
 */
var mergeTrees = function(root1, root2) {
    if (!root1) {
        return root2;
    }

    if(!root2) {
        return root1;
    }

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};