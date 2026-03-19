# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Stacks

> A collection of elements that you can 1) Push: Add to the top, and 2) Pop: Remove from the top

Good analogy: Think of a stack of plates. You can only add or remove plates from the top. Never from the middle or the bottom. This makes a stack LIFO (Last In First Out).

Each stack operation is efficient and takes O(1) time.

1. push(x): adds x to the top
2. pop(): removes from the top
3. peek(): gets the value at the top without removing it
4. size(): gets the size of the stack
5. isEmpty(): checks if the stack is empty

### Challenge:

Implement the Stack class methods. Run the tests with `npm test` to make sure your stack behaves as expected.

Notes:

1. Remember that the JavaScript array already has `push` and `pop` methods that do exactly what you want.
2. Make sure to deal with the cases when the stack is empty and you're trying to pop from or peek at the top. When the stack is empty, throw the Error("Stack is empty.").

My attempt:

```js
export class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    // Push the element to the top/end of the stack.
    return this.stack.push(element);
  }

  pop() {
    if (this.stack.length <= 0) throw new Error('Stack is empty.');
    // Remove the top element from the end of stack and return it.
    return this.stack.pop();
  }

  peek() {
    if (this.stack.length <= 0) throw new Error('Stack is empty.');
    // Return the top element from the stack without removing it.
    const top = this.stack.length - 1;
    return this.stack[top];
  }

  size() {
    // Return the size of the stack.
    return this.stack.length;
  }

  isEmpty() {
    // Return whether the stack is empty or not.
    return this.stack.length <= 0 ? true : false;
  }
}
```

The instructors approach, prefer his reuse of `isEmpty()`.

```js
export class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.');
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty.');
    }
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
```
