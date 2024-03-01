// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

// My approach
var sumRootToLeaf = function(root) {
    const binaries = [];
    const traverse = (node, str) => {
        if (node === null) {
            return;
        }
        // compose the binary string for the next node
        const binary = `${str}${node.val}`;
        // when visiting a leaf, add binary string to the array
        if (node.left === null && node.right === null) {
            binaries.push(binary);
        }
        
        traverse(node.left, binary);
        traverse(node.right, binary);
    }
    
    traverse(root, '');
    return binaries.reduce((sum, binary) => {
        sum += parseInt(binary, 2);
        return sum;
    }, 0)
};

// optimized solution
var sumRootToLeaf = function(root, bin = "") {
    if(!root)
        return 0;
    bin += root.val;
    if(!root.left && !root.right)
        return parseInt(bin,2);
    return sumRootToLeaf(root.left,bin) + sumRootToLeaf(root.right,bin);   
};


var sumRootToLeaf = function(root) {
    return rtl(root,"");
};

// GPT generated
function sumRootToLeaf(root) {
    function dfs(node, currentSum) {
        if (!node) return 0;
        
        currentSum = (currentSum << 1) | node.val;

        if (!node.left && !node.right) { // Leaf node
            return currentSum;
        } else {
            return dfs(node.left, currentSum) + dfs(node.right, currentSum);
        }
    }

    return dfs(root, 0);
}
