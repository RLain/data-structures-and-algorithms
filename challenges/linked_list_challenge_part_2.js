/*
Challenge - Part 2:
*******************

You are given:
1. the head of a linked list,
2. and a value to add to the end. 
Add the value as a new node to the end of the linked list and return the head.


Examples:
**********

Example 1:
```
linked list = head 
               1 -> 2 -> 3 -> null
head = points to 1
value = 4 
result = head
          1 -> 2 -> 3 -> 4 -> null
```

Example 2:
```
linked list = head
                1 -> null
head = points to 1
value = 2 
result = head
           1 -> 2 -> null
```

Example 3:
```
linked list = head
              null
head = points to null
value = 1 
result = head
          1 -> null
```


Task:
*****

Implement the function `addToEndUsingHead()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm run test:head` to make sure it works as expected.


Constraints:
************

- Linked list may be empty.


Notes:
******

1. Use the Node class provided.
2. Check `hints.md` if needed.
*/

// Part 2:
export function addToEndUsingHead(head, value) {
  const node = new Node(value);
  if (head === null) {
    head = node;
  } else {
    console.log('action', head, value);
    console.log('value', value);
    const tail = { value: value, next: null }; //⚠️ This is very wrong. Do not create new objects when using Linked Lists!!
    console.log('tail', tail);
    /* Here we need to append the new node onto the bottom value's next.
       Node {
        value: 1,
        next: Node { value: 2, next: Node { value: 3, next: null } }
      } 4

      If you only have the head, create a new pointer, tail, and start at the head and keep moving the tail until it points to the last node in the list. After that, you could just use the previous function which uses the tail to add the new node to the end.

      How do you move a pointer to the next node? You assign the `next` of the current node to it. `tail = tail.next`.
    */

    // Create tail
    // Then use addToEndUsingTail
  }
  console.log('result', head);
  return head;
}

// Attempt 2
export function addToEndUsingHead(head, value) {
  const node = new Node(value);
  if (head === null) {
    head = node;
  } else {
    let current = head;
    // This walks through the head Nodes, until the condition is no longer reached, ergo next = null. Which is exactly what we want as this becomes the tail.
    while (current.next !== null) {
      current = current.next;
    }
    return addToEndUsingTail(head, current, value);
  }
  return head;
}

// Lecturers approach

export function addToEndUsingHead(head, value) {
  let tail = head;
  if (head !== null) {
    while (tail.next !== null) {
      tail = tail.next;
    }
  }
  return addToEndUsingTail(head, tail, value);
}
