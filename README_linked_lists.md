# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Linked Lists

- A list of elements where each is linked to (or points to) the next element
- The `first` element has a pointer pointing to it called the `head`.
- The `last` element points to `null`.

An `array` is stored in a `continguous segment in memory` which makes it easy to access each item directly by its index and O(1) time complexity. However, it takes O(n) time to add an item to either the beginning or middle of the array because you have to shift all items that come after it in memory.

A `linked list`, is sort of the opposite of an array and stores data in a way that it does not need a continguous segment in memory. It is much easier to add an item to the beginning of a linked list. We simply create a node, make it point to the previous first node, and move the `head` pointer to the new first node which takes O(1) time.

A `node` is comprised of two parts:

[value][next]
