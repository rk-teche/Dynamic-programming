// https://leetcode.com/problems/same-tree/

// my solution
var isSameTree = function(p, q) {
    const pInOrder = inOrderIterator(p);
    const qInOrder = inOrderIterator(q);
    let isSame = true;
    const inOrderMax = Math.max(pInOrder.length, qInOrder.length)
    for(let i = 0; i < inOrderMax; i++)
    {
        if(pInOrder[i] !== qInOrder[i])
        {
            isSame = false
            break;
        }
    }

    const pPreOrder = preOrderIterator(p);
    const qPreOrder = preOrderIterator(q);
    const preOrderMax = Math.max(pPreOrder.length, pPreOrder.length)
    if(isSame)
    {
        for(let i = 0; i < preOrderMax; i++)
        {
            if(pPreOrder[i] !== qPreOrder[i])
            {
                isSame = false
                break;
            }
        }
    }
    
    return isSame
};

function inOrderIterator(node, nodes = [])
{
    // base condition
    if(!node)
    {
        nodes.push(100000)
        return nodes;
    }
    inOrderIterator(node.left, nodes);
    nodes.push(node.val)
    inOrderIterator(node.right, nodes);

    return nodes;
}

function preOrderIterator(node, nodes = [])
{
    // base condition
    if(!node)
    {
        nodes.push(100000)
        return nodes;
    }
    nodes.push(node.val)
    preOrderIterator(node.left, nodes);
    preOrderIterator(node.right, nodes);

    return nodes;
}


// optamized solution
var isSameTree = function(p, q) {
    if( !p && !q ) return true;
    if( !p || !q) return false;

    if(p.val != q.val) return false;

    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);

};