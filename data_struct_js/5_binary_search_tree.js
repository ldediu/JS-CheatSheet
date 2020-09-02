class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let newNode = new Node(val);
        if (!this.root)
        {
            this.root = newNode;
            return this;
        }
        let curr = this.root;
        while(true) {
            if (val == curr.val)
                return undefined;
            if (val < curr.val)
            {
                if (curr.left === null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left
            }
            else {
                if (curr.right === null) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }
    find(val) {
        if (this.root === null) return false;
        let curr = this.root;
        let found = false;
        while(curr && !found)
        {
            if (val < curr.val)
                curr = curr.left;
            else if (val > curr.val)
                curr = curr.right;
            else
                found = true;
        }
        if (!found) return undefined;
        return curr;
    }
    breadthFirstSearch() {
        let out = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            out.push(node.val);
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        return out;
    }
    dfs_preOrder() {
        let out = [];
        function traverse(node) {
            out.push(node.val);
            if(node.left)
                traverse(node.left);
            if(node.right)
                traverse(node.right);
        }
        traverse(this.root);
        return out;
    }
    dfs_postOrder() {
        let out = [];
        function traverse(node) {
            if(node.left)
                traverse(node.left);
            if(node.right)
                traverse(node.right);
            out.push(node.val);
        }
        traverse(this.root);
        return out;
    }
    dfs_inOrder() {
        let out = [];
        function traverse(node) {
            if(node.left)
                traverse(node.left);
            out.push(node.val);
            if(node.right)
                traverse(node.right);
        }
        traverse(this.root);
        return out;
    }
}

let tree = new BinarySearchTree();

//       10
//   6       15
// 3   8   12   17

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(12);
tree.insert(17);

console.log(tree.find(11));

console.log(tree);

console.log('----------------');

console.log(tree.breadthFirstSearch());

console.log(tree.dfs_preOrder());

console.log(tree.dfs_postOrder());

console.log(tree.dfs_inOrder());