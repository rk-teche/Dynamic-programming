/**
 * Height of the Binary Tree
 */
function getTreeHeight(tree)
{
    if(tree.length <= 0) // base condition
        return 0;

    return 1 + Math.max(getTreeHeight(tree.left), getTreeHeight(tree.right))
}