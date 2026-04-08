# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Queues

An ordered collection of elements sthat you can:

1. Enqueue: Add to the back
2. Dequeue: Remove from the front

This means a queue is FIFO (First in, First Out).

It is optimal to use a queue when you need to _process items in the same order that they arrived_.

```js
export class Queue {
  constructor() {
    this.queue = [];

    if (!this.queue) return;
  }

  enqueue(element) {
    return this.queue.push(element);
  }

  dequeue() {
    if (this.isEmpty) throw new Error('Queue is empty.');

    // .shift() removes the FIRST element from the array! Whereas .pop() removes the last.
    return this.queue.shift();
  }

  peek() {
    if (this.isEmpty) throw new Error('Queue is empty.');

    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return !!(this.queue && this.queue.length === 0);
  }
}
```
