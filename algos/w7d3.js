class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    seedFromArr(vals) {
        for (const item of vals) {
            this.insertAtBack(item);
        }
        return this;
    }

    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }

    isEmpty() {
        return this.head == null;
    }

    insertAtBack(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            return this;
        }
        let runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    insertAtFront(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    removeHead() {
        if (this.isEmpty()) {
            return null;
        }

        const removedHead = this.head;

        this.head = removedHead.next;
        removedHead.next = null;
        return removedHead.data;

    }

    average() {
        let sum = 0;
        let count = 0;

        let runner = this.head;

        while (runner) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }
        return sum / count;
    }

    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}

     */
    contains(val) {
        var runner = this.head;
        var contain = false;
        while (runner) {
            if (runner.data == val) {
                contain = true;
            }
            runner = runner.next;
        }
        return contain;
    }

    // EXTRA
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}

     */
    containsRecursive(val, current = this.head) {
        if (current.data == val) {
            return true;
        } else if (current.next) {
            return this.containsRecursive(val, current.next)
        } else {
            return false;
        }
    }

    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {Node} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (runner.data > maxNode) {
            maxNode = runner.data;
        }
        if (runner.next) {
            return this.recursiveMax(runner.next, maxNode);
        } else {
            return maxNode.data;
        }
    }
}

var sll = new SinglyLinkedList().insertAtFront(5).insertAtBack(3).insertAtBack(3).removeBack();
console.log(sll.toArr());
console.log(sll.contains(3));
console.log(sll.containsRecursive(1));
console.log(sll.recursiveMax());
