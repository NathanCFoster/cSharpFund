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

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        var temp = this.head;
        var newNode = new Node(data);
        if (this.head) {
            newNode.next = temp;
        }
        this.head = newNode;
        return this;
    }

    /**
     * Removes the first node of this list, and return the removed node.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if (! this.head) {
            return this;
        } else {
            this.head = this.head.next;
        }
        return this;
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        var runner = this.head;
        var sum = runner.data;
        var amnt = 1;
        if (runner.next) {
            while (runner.next) {
                runner = runner.next;
                sum += runner.data;
                amnt++;
            }
        }
        return sum / amnt;
    }

}

var list = new SinglyLinkedList().insertAtBack(5).insertAtBack(3).insertAtFront(1).removeHead();
console.log(list.average());
console.log(list.toArr());