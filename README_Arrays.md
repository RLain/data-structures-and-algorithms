# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Arrays

> An ordered list of items

Accessing an index in an array is a very fast O(1) operation.

This is because when an array is stored in memory, its elements are stored in a numerical position from the array address.
E.g. a standard index is [0, 1, 2, 3, 4]

If the array starts at memory address "1000" and we are looking for the third index, we know that this would be position 1000 + 3 = 1003.

Arrays can be `static` or `dynamic`.

- Static: Fixed length which cannot be changed after creation
- Dynamic: Flexible length

Some examples of what we can do with arrays.

```js
const nums = [1, 2, 3];

console.log(nums[0]);

console.log(nums.length);

nums.push(4);

const lastItem = nums.pop();

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

//When you don't need the index of the item
for (const num of nums) {
  console.log(num);
}
```
