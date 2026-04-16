/* Challenge - Part 1:
*******************

You are given:
1. the head of a linked list,
2. an additional pointer called `tail` pointing to the last node in the list, 
3. and a value to add to the end. 
Add the value as a new node to the end of the linked list and return the head.


Examples:
**********

Example 1:
```
linked list = head      tail 
               1 -> 2 -> 3 -> null
head = points to 1
tail = points to 3
value = 4 
result = head
          1 -> 2 -> 3 -> 4 -> null
```

Example 2:
```
linked list = head tail
                  1 -> null
head = points to 1
tail = points to 1
value = 2 
result = head
           1 -> 2 -> null
```

Example 3:
```
linked list = head tail
                 null
head = points to null
tail = points to null
value = 1 
result = head
          1 -> null
```


Task:
*****

Implement the function `addToEndUsingTail()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm run test:tail` to make sure it works as expected.


Constraints:
************

- Linked list may be empty.


Notes:
******

1. Use the Node class provided.
2. Check `hints.md` if needed. */

// # Attempt 1: = Failed
// Part 1: adds 4 to a list of 1, 2, 3
export function addToEndUsingTail(head, tail, value) {
  console.log(
    'addToEndUsingTail',
    JSON.stringify({
      head,
      tail,
      value
    })
  );

  if (!head) return;

  const newTail = new Node(value);
  const oldTail = new Node(tail.value, newTail);

  console.log(oldTail);
  console.log('originalHead', head);

  const result = {
    head: { ...head, ...oldTail },
    tail: newTail
  };

  console.log('result', JSON.stringify(result));
  return result;
}

/*GPT insight: 
Right now you’re treating nodes like plain objects you can merge, but a linked list is really about references between nodes, not copying values around.
A linked list grows by changing pointers, not by copying nodes.
*/

// # Attempt 2: Focusing on a single pointer change:

export function addToEndUsingTail(head, tail, value) {
  //If the list is empty, create a valid single-node list
  if (!head) return new Node(value); //In hindsight the duplication of new Node(value) and below is suboptimal....

  tail.next = new Node(value); //Notice this direct mutation and is the real linked list operation
  return head;
}

/* GPT insight
In real systems, you would instead:
• encapsulate this in a class
• ensure tail is always updated internally
• never trust external tail inputs */

// Lecturers approach:

export function addToEndUsingTail(head, tail, value) {
  const node = new Node(value);
  if (head === null) {
    head = node;
  } else {
    tail.next = node;
  }
  return head;
}
