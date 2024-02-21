// https://leetcode.com/problems/sum-root-to-leaf-numbers/

// my solution -
var sumOfLeftLeaves = function(node, sum = 0) {

    if(!node)
        return 0

    const leftLeafNode = node.left ? (!node.left.left && !node.left.right) ? node.left.val : 0 : 0;
    sum += leftLeafNode + sumOfLeftLeaves(node.left, sum) + sumOfLeftLeaves(node.right, sum)
    
    return sum
};

// optimized solution
var sumOfLeftLeaves = function (root) {
    let sum = 0;
  
    const dfs = (node, isLeft) => {
      if (!node.left && !node.right && isLeft) {
        sum += node.val;
        return
      }
      node.left && dfs(node.left, true);
      node.right && dfs(node.right, false);
    }
    dfs(root, false);
    return sum;
  };