class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let tmp = this.first;
            this.first = newNode;
            this.first.next = tmp;
        }
        this.size++;
        return true;
    }
    pop() {
        if (!this.first)
            return null;
        let tmp = this.first;
        if (this.first == this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        return tmp.val;
    }
}

let myStack = new Stack();

myStack.push('5');
myStack.push('10');
myStack.push('15');

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());