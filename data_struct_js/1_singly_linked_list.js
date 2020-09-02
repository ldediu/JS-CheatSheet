class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let el = new Node(val);
        if (!this.head) {
            this.head = this.tail = el;
        } 
        else {
            this.tail.next = el;
            this.tail = el;
        }
        this.length++;
        return this;
    }
    traverse() {
        let el = this.head;
        while(el) {
            console.log(el.val);
            el = el.next;
        }
    }
    pop() {
        if (!this.head)
            return undefined;
        let curr = this.head;
        let prev = curr;
        while(curr.next) {
            prev = curr;
            curr = curr.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = null;
        }
        return curr.val;
    }
    shift() {
        if (!this.head)
            return undefined;
        let curr = this.head;
        this.head = curr.next
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return curr.val;
    }
    unshift(val) {
        let el = new Node(val);
        if (!this.head)
            this.head = this.tail = el;
        else {
            el.next = this.head;
            this.head = el;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0)
            return null;
        let el = this.head;
        while (index != 0) {
            el = el.next;
            index--;
        }
        return el;
    }
    set(index, val) {
        let el = this.get(index);
        if (el == null)
            return null;
        else
            el.val = val;
        return el.val;
    }
    insertAt(index, val) {
        if (index < 0 || index > this.length)
            return false;
        else if (index == 0)
            return !!this.unshift(val);
        else if (index == this.length)
            return !!this.push(val);
        else {
            let el = new Node(val);
            let temp = this.head;
            let prev = temp;
            while (index)
            {
                prev = temp;
                temp = temp.next;
                index--;
            }
            el.next = temp;
            prev.next = el;
            this.length++;
            return true;
        }
    }
    removeAt(index) {
        if (index < 0 || index >= this.length)
            return null;
        else if (index == this.length - 1)
            return this.pop();
        else if (index == 0)
            return this.shift();
        else {
            let prev = this.get(index - 1);
            let curr = prev.next;
            prev.next = curr.next;
            this.length--;
            return curr.val;
        }
    }
    reverse() {
        let curr = this.head;
        let prev = null;
        let next = null;
        this.tail = this.head;
        while (curr)
        {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('aaaa');
list.push('bbbb');;
list.push('cccc');

console.log('-----------');

list.traverse();

list.reverse();

console.log('-----------');

list.traverse();

console.log(list.tail);
