/*
Algorithm: Breadth-First Search
Input: the root, and the target
Output: true if target found, false if not

Steps:
1. Init a queue.
2. Add the root to the queue.
3. As long as there are nodes in the queue:
4.   Get a node from the queue.
5.   If it's the target:
6.     Target found. Return true.
7.   Add the children of the node to the queue.
8. Loop finished and target not found. Return false. 
*/

/*
Challenge:
***********

Implement the BFS algorithm above using a queue.
*/

// My attempt:

import { Queue } from './library/queue';

export function breadthFirstSearch(root, target) {
  console.log('root', root);
  const queue = new Queue();
  if (root !== null) queue.enqueue(root);
  while (!queue.isEmpty()) {
    const node = queue.peek();
    if (node.value === target) return true;
    else queue.dequeue(node);
    if (node.right !== null) queue.enqueue(node.right);
    if (node.left !== null) queue.enqueue(node.left);
  }
  return false;
}

// Lecturers approach:

export function breadthFirstSearch(root, target) {
  const notVisited = new Queue();
  if (root !== null) {
    notVisited.enqueue(root);
  }
  while (!notVisited.isEmpty()) {
    const node = notVisited.dequeue();
    if (target === node.value) {
      return true;
    }
    if (node.left !== null) {
      notVisited.enqueue(node.left);
    }
    if (node.right !== null) {
      notVisited.enqueue(node.right);
    }
  }
  return false;
}
