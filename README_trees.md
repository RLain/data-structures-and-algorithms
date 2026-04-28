# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Trees

A hierarchical tree structure consisting of a set of connected nodes.

Each node has a `parent node` and one or more `child nodes`, except for:

- The `root` node which has no parent
- The `leaf` nodes which have no children

Applications:

1. File system directory structure
2. DOM tree of HTML documents
3. Search trees

## Binary Search Trees (BST)

Average search operation: O(log n) with n being the number of nodes in the tree.

These trees have a very specific pattern. Note how in the below image:

- The `left` side is always `less` that the parent
- The `right` side is always `more` than the parent

![Binary Search Tree diagram](assets/binary_search_tree.png)

Here is an example of inserting a new value into a tree:

```js
export function insert(root, value) {
  if (root === null) {
    root = new Node(value);
  } else if (value < root.value) {
    root.left = insert(root.left, value);
  } else if (value > root.value) {
    root.right = insert(root.right, value);
  }
  return root;
}
```

## Depth-first search (DFS)

- Uses a `stack`
- Goes deep in the tree first

Using this example
![Binary Search Tree diagram](assets/binary_search_tree.png)

We'd:

1. Go down 4 > 2 > 1. 1 has no children so we'd
2. Then move across to it's sibling if it exists ergo 3.
3. If not found then we move up a layer to 2.
4. If not found, we move to 2's sibling which is 6, then down again, to 5.
5. Followed by 7.

The pattern is down as deep as possible, then to siblings.
Then up a layer, to siblings
etc

## Breadth-first search (BFS)

- Uses a `queue`
- Looks at all the nodes in each level before moving to the next level

Again using this example
![Binary Search Tree diagram](assets/binary_search_tree.png)

This does the reverse, it starts at the top, then works down each layer.

1. Start at 4
2. Then down to 2, and then 6
3. Then down to 1 > 3 > 5 > 7

## DFS vs BFS

Use DFS:

1. When the target is deep in the tree
2. To traverse the tree in:
   a. In order
   b. Pre order
   c. Post order
3. To minimize memory use

Use BFS:

1. When the target is `close` to the root
2. To visit all the nodes in increasing order of distance from the root
3. To find the shortest path to a node
