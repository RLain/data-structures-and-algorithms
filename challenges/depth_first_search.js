/*
Algorithm: Depth-First Search
Input: the root, and the target
Output: true if target found, false if not

Steps:
1. Init a stack.
2. Add the root to the stack.
3. As long as there are nodes in the stack:
4.   Get a node from the stack.
5.   If it's the target:
6.     Target found. Return true.
7.   Add the children of the node to the stack.
8. Loop finished and target not found. Return false. 
*/

// My initiall attempt

import { Stack } from './library/stack';

export function depthFirstSearch(root, target) {
  const stack = new Stack(root);

  if (stack.isEmpty()) return false;

  for (element of stack) {
    if (stack.peek() === target) return true;
    else stack.pop();
  }

  return false;
}

/*
What to take away (this matters)

If you remember one thing:

DFS is not about the stack itself — it’s about what you do every time you pop.

Every iteration must:
- Take a node
- Check it
- Add its children
*/

// The correct approach:

export function depthFirstSearch(root, target) {
  const notVisited = new Stack();
  if (root !== null) {
    notVisited.push(root); //Only assign the root to the stack if it exists
  }
  while (!notVisited.isEmpty()) {
    //while() is more appropriate here
    const node = notVisited.pop();
    if (target === node.value) {
      return true;
    }
    // Then assign children
    if (node.right !== null) {
      notVisited.push(node.right);
    }
    if (node.left !== null) {
      notVisited.push(node.left);
    }
  }

  return false;
}
