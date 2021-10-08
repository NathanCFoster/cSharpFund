/**
 * Class to represent a priority queue element. This is so that the priority
 * property does not need to be stored on the given item itself.
 */
class QElement {
    constructor(element, priority) {
        // element is the given item to be added to the queue.
        this.element = element;
        this.priority = priority;
    }
}

/**
 * Class to represent a PriorityQueue with methods that enforce the correct
 * order of queue items.
 */
class PriorityQueue {
    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    /**
     * Adds the new item in the correct location in the queue based on priority.
     * - Time: O(?)
     * - Space: O(?)
     * @param {any} element The item to add.
     * @param {number} priority The importance, low is more important.
     * @returns {number} The new length.
     */
    enqueue(element, priority) {
        let newElement = new QElement(element, priority);
        if (this.items.length > 0) {
            for (let index = 0; index < this.items.length; index++) {
                if (!this.items[index + 1] || this.items[index + 1].priority > priority) {
                    this.items.splice(index+1, 0, newElement);
                    break;
                }
            }
        } else {
            this.items.splice(0, 0, newElement);
        }
        return this.items.length;
    }

    /**
     * Removes and returns the most prioritized item.
     * - Time: O(?)
     * - Space: O(?)
     * @returns {QElement|undefined}.
     */
    dequeue() {
        return this.items.splice(0,1);
    }
}

var tdList = new PriorityQueue();
console.log(tdList.enqueue("Wake up", 1));
console.log(tdList.enqueue("Wake up", 2));
console.log(tdList.enqueue("Wake up!", 2));
console.log(tdList.enqueue("Wake up!!", 2));
console.log(tdList.dequeue());