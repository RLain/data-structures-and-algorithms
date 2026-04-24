/*Challenge:
**********

Implement the BST search operation. It will be similar to the insert operation you saw in the previous lesson. 
The function receives the root of the tree as well as the target value as inputs, 
and must return true if the target is found in the tree, and false if it’s not.


Examples:
**********

Example 1:
```
root = ------->
              6
        4          8
     3     5    7     9
 1    

target = 5 
result = true
```

Example 2:
```
root = ------->
              6
        4          8
     3     5    7     9
 1

target = 15 
result = false
```

Example 3:
```
root = ------->
             null   

target = 15 
result = false
```


Task:
*****

Implement the function `search()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm run test` to make sure it works as expected.


Constraints:
************

- The tree may be empty.


Notes:
******

1. Use recursion.
2. Check `hints.md` if needed.*/

// Very basic attempt #1 - intention is to understand the data structure

export function search(root, target) {
  console.log('search', root, target);
  if (!root || (!root.left && !root.right)) return false;

  //We know what the target is, and if the target is less or more than the top value.
  if (target < root.value) {
    console.log('less than');
    //Again we need to determine if target is less or more than the top value inside left
    if (target < root.left.value) {
      console.log('less than = left');
    } else {
      console.log('more than = right');
      console.log('root.left.right.value', root.left.right.value);
      if (target === root.left.right.value) return true;
    }
  } else {
    console.log('more than');
  }
}

// Attempt 2 using recursion

export function search(root, target) {
  console.log('TARGET', target);
  console.log('ROOT', root);

  if (!root) return false;

  if (target === root.value) {
    console.log('MATCHES! 🎉');
    return true;
  }

  if (target < root.value) {
    console.log('less than');
    return search(root.left, target);
  } else {
    console.log('right of');
    return search(root.right, target);
  }
}

// Lecturers approach (stoked that I got super close to this one by myself!)

/*
Algorithm: BST Search
Input: the BST root, and the target value
Output: true if target found, false if not

Steps:
1. If the tree is empty:
2.   The target cannot be found. Return false.
3. If the target is the current value:
4.   We found the target. Return true.
5. If the target is less than the current value:
6.   Recursively search in the left subtree and return the result.
7. If the target is greater than the current value:
6.   Recursively search in the right subtree and return the result.
*/

export function search(root, target) {
  if (root === null) {
    return false;
  }
  if (target === root.value) {
    return true;
  }
  if (target < root.value) {
    return search(root.left, target);
  }
  if (target > root.value) {
    return search(root.right, target);
  }
}
