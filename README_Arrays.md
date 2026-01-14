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

## Challenge

We were given the following challenge to tackle:

Algorithm: Get Age Range
Input: array of ages
Output: age range

When I initially approached this, I wrongly assumed I needed to first sort the array to infer the minimum and maximum ages and attempted the following:

```js
/*
Becca's Steps:
1. First we need to ascertain if the array contains any elements.
2. Then we should check if the array is already in sorted order lowest to highest.
3. Then we need to iterate through the array to figure out the lowest value and highest value.
4. Once these are ascertained, we then can subtract lowest from highest.
...

TC: Time complexity
SC: Space complexity
*/

export function getAgeRange(ages) {
  console.log("Ages", ages);
  //1. First we need to ascertain if the array contains any elements.
  const agesLength = ages.length;
  if (!agesLength) return 0; //TC:  O(1)

  //2. Then we should check if the array is already in sorted order lowest to highest.
  let isSorted = false;
  for (let i = 1; i < agesLength; i++) {
    if (ages[i - 1] > ages[i]) {
      isSorted = false;
      break;
    }
  } //TC: O(1) best case -> O(n) worst case = O(n)

  //3. Then we need to iterate through the array to figure out the lowest value and highest value.
  let lowestValue = ages[0];
  let highestValue = ages[agesLength - 1];

  if (!isSorted) {
    for (let i = 0; i < agesLength - 1; i++) {
      let min_idx = i;

      for (let j = i + 1; j < agesLength; j++) {
        if (ages[j] < ages[min_idx]) {
          min_idx = j;
        }
      }

      let temp = ages[i];
      ages[i] = ages[min_idx];
      ages[min_idx] = temp;
    }

    lowestValue = ages[0];
    highestValue = ages[agesLength - 1];
  } //TC: O(n^2) due to the nested loops

  //4. Once these are ascertained, we then can subtract lowest from highest.
  return highestValue - lowestValue; //TC: O(1)
}

// Time complexity: O(n^2) = Quadratic
// Space complexity: O(n^2)
```

This was massively overcomplicated....!

A critical insight gained is that this challenge _does not need a sorted array_. We need to simply iterate through the array and check is the next number less than the current min age, or more than the current max age.

_Critical rule_: Never sort data unless the problem explicitly requires order.
If the output is:

- One value
- A count
- A min/max
- A boolean

Sorting is almost always the wrong tool.

_Here is the optimised method:_

```js
Steps:
1. First we need to ascertain if the array contains any elements.
2. Then we iterate through the array to check if the next number if bigger than the current max, or smaller than the current min.
3. Then subtract
...
*/

export function getAgeRange(ages) {
    const agesLength = ages.length
    if (!agesLength) return 0 //TC: (O1)

    let min = ages[0]
    let max = ages[0]

    for (let i = 1; i < ages.length; i++) {
        if (ages[i] < min) min = ages[i]
        if (ages[i] > max) max = ages[i]
    } //TC: O(n)

    return max - min //TC: (O1)
}

// Time complexity: (O1) + O(1) + O(n) = O(n)
/* Space complexity:
    • agesLength
    • i for the loop index
    • min
    • max

These are:
• Fixed in count
• Independent of n
• Not growing with input size

Therefore the space complexity is O(1)

Summary: The algorithm uses constant auxiliary space because it only stores a few scalar variables (min, max, and counters) and does not allocate memory proportional to the input size.
*/
```
