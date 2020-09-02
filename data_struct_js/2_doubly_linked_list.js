class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    traverse() {
        let el = this.head;
        while(el) {
            console.log(el.val);
            el = el.next;
        }
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head)
            this.head = this.tail = newNode;
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        let retNode = this.tail;
        if (this.length === 1)
            this.head = this.tail = null;
        else {
            this.tail = retNode.prev;
            this.tail.next = null;
            retNode.prev = null;
        }
        this.length--;
        return retNode;
    }
    shift() {
        if (!this.head)
            return undefined;
        let oldHead = this.head;
        if (this.length === 1)
            this.head = this.tail = null;
        else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newHead = new Node(val);
        if (!this.head)
            this.head = this.tail = newHead;
        else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length || !this.head)
            return null;
        let tmp;
        if (index > Math.floor(this.length / 2))
        {
            let i = this.length - index - 1;
            tmp = this.tail;
            while (i > 0)
            {
                tmp = tmp.prev;
                i--;
            }
        }
        else {
            tmp = this.head;
            while (index > 0)
            {
                tmp = tmp.next;
                index--;
            }
        }
        return tmp;
    }
    set(index, val) {
        let newNode = this.get(index);
        if (newNode != null)
        {
            newNode.val = val;
            return true;
        }
        return false;
    }
    insertAt(index, val) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            this.unshift(val);
        else if (index == this.length)
            this.push(val);
        else {
            let prev = this.get(index - 1);
            let newNode = new Node(val);
            newNode.next = prev.next;
            prev.next.prev = newNode;
            newNode.prev = prev;
            prev.next = newNode;
            this.length++;
        }
        return true;
    }
    removeAt(index)
    {
        if (index < 0 || index >= this.length)
            return null;
        if (index == 0)
            return this.shift();
        if (index == this.length - 1)
            return this.pop();
        let delNode = this.get(index);
        let prev = delNode.prev;
        let next = delNode.next;
        next.prev = prev;
        prev.next = next;
        delNode.prev = delNode.next = null;
        this.length--;
        return delNode;
    }
}

let list = new DoublyLinkedList();
list.push('hello');
list.push('world');
list.push('aaaa');
list.push('BBBB');
list.push('cccc');


console.log('-----------');

console.log(list.removeAt(4));

list.traverse();

//console.log(list);

