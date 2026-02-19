/*
Algorithm: Binary Search
Input: array of sorted numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Init l to 0.
2. Init r to point to the last element in the array.
3. Loop as long as l did not pass r:
4.   Init m to be the middle point between l and r.
5.   If the value at m is the target:
6.     Return m.
7.   Else if the value at m is less than the target:
8.     Move l to right after m.
9.   Else:
10.    Move r to right before m.
11. Return -1.
*/

/*
Challenge:
***********

Implement the binary search algorithm. Call the function binarySearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works.

Note: If needed, see hint.md for the formula.
*/

export function binarySearch(numbers, target) {
  const numbersLength = numbers.length;
  if (numbersLength < 1) return -1;

  let left = 0;
  let right = numbersLength;

  console.log('start', {
    numbers,
    left,
    right,
    target
  });

  for (let i = 0; i < numbersLength; i++) {
    if (left > right) return -1;
    let mid = left + Math.floor((right - left) / 2);
    const midValue = numbers[mid];
    console.log('mid', {
      mid,
      midValue
    });
    if (midValue === target) return mid;
    else if (midValue < target) {
      console.log('mid less than target');
      left = mid + 1;
    } else {
      console.log('mid more than target');
      right = mid - 1;
    }

    console.log('end', {
      left,
      right,
      mid: numbers[mid],
      target
    });
  }
}

console.log(binarySearch([2, 4, 5, 8, 13, 21], 5));
