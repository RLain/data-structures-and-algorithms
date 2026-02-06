/*
Algorithm: Merge Sort
Input: array of numbers
Output: a new array with the numbers sorted in ascending order

Steps:
1. If there is one or no number in the array:
2.   Return the array. It's already sorted.
3. Find the index of the mid point in the array.
4. Get a copy of the left half of the array.
5. Get a copy of the right half of the array.
6. Sort the left half.
7. Sort the right half.
8. Merge the two sorted halves and return the result.
*/

function mergeSort(numbers) {
  if (numbers.length <= 1) {
    return numbers
  }
  const mid = Math.floor(numbers.length / 2)
  const leftHalf = numbers.slice(0, mid)
  const rightHalf = numbers.slice(mid)
  const sortedLeft = mergeSort(leftHalf)
  const sortedRight = mergeSort(rightHalf)

  return merge(sortedLeft, sortedRight)
}
/*
Challenge:
***********

Implement the first algorithm in JavaScript. 


Notes:
******

1. Use recursion.
2. You may find `Math.floor()` and the array `slice()` methods useful.
*/


/*
Algorithm: Merge Two Sorted Arrays
Input: two sorted arrays of numbers, left and right
Output: a new array of the two arrays merged

Steps:
1. Init an empty result array.
2. Init a pointer for the left half.
3. Init a pointer for the right half.
4. Loop over both arrays until we reached the end of one of them:
5.   If the current number in the left half is less than the current number in the right half:
6.     Add it to the result.
7.     Increase the left pointer.
8.   Else:
9.     Add the current number from the right half to the result.
10.    Increase the right pointer.
11. After the loop is over, add whatever is left in either halves to the result.
12. Return the result array.
*/

function merge(leftHalf, rightHalf) {
  const result = []
  let leftPointer = 0
  let rightPointer = 0
  while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
    if (leftHalf[leftPointer] < rightHalf[rightPointer]) {
      result.push(leftHalf[leftPointer])
      leftPointer++
    } else {
      result.push(rightHalf[rightPointer])
      rightPointer++
    }
  }
  while (leftPointer < leftHalf.length) {
    result.push(leftHalf[leftPointer])
    leftPointer++
  }
  while (rightPointer < rightHalf.length) {
    result.push(rightHalf[rightPointer])
    rightPointer++
  }
  return result
}

const numbers = [8, 1, 4, 3, 6, 2, 7, 5]
console.log(mergeSort(numbers))