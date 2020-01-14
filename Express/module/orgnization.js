class Node { 
    constructor(d) { 
        this.left = null;
        this.right = null;
        this.data = d;
    } 
}   
class Index { 
    constructor(){
        this.index = 0; 
    }
} 
  
class BinaryTree {  
    constructTreeUtil(pre, preIndex, key, min, max, size) {
        if (preIndex.index >= size) {            
            return null; 
        }
        var root = null; 
        if (key.inorder_index > min.inorder_index && key.inorder_index < max.inorder_index) {         
            root = new Node(key); 
            preIndex.index = preIndex.index + 1;   
            if (preIndex.index < size) { 
                root.left = this.constructTreeUtil(pre, preIndex,  
                            pre[preIndex.index], min, key, size);  
                root.right = this.constructTreeUtil(pre, preIndex,  
                             pre[preIndex.index], key, max, size); 
            }
        } 
        return root; 
    } 
    constructTree(pre, size) { 
        let min = {};
        let max = {};
        min.inorder_index = Number.MIN_SAFE_INTEGER;
        max.inorder_index = Number.MAX_SAFE_INTEGER;
        return this.constructTreeUtil(pre, new Index(), pre[0], min, 
        max, size);
    } 
    printInorder(node) { 
        if (node == null) { 
            return;
        }
        this.printInorder(node.left); 
        console.log(node.data.inorder_index+ " "); 
        this.printInorder(node.right); 
    } 
  
} 

module.exports.getOrnizationTree =  function getOrnizationTree(pre) { 
        var tree = new BinaryTree(); 
        var size = pre.length; 
        var root = tree.constructTree(pre, size); 
        return JSON.stringify(root);
}