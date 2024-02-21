// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

function maxDepth(node, maxHeight = 0)
{
    // base condition
    if(!node)
        return 0;

    maxHeight = Math.max(maxDepth(node.left), maxDepth(node.right)) + 1   
}