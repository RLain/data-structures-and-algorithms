# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Sorting & Searching algorithms

There are hundreds of searching and sorting algorithms. In this course we will focus on a small number of these that
are the most useful ones to know as a developer.

## Bubble sort

Algorithm: Bubble Sort
Input: array of numbers
Output: the array with the numbers sorted in place and in ascending order

Steps:

1.  Iterate n - 1 times:
2.  Iterate from the start of the array to the end of the unsorted numbers:
3.                              If the current number is greater than the one after it:
4.                                Swap the numbers. Bubble the greater number up.

```js
function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
}

const numbers = [5, 3, 2, 4, 1];
bubbleSort(numbers);
console.log(numbers);
```

### Challenge:

What is the time and space complexity of this algorithm?

Time complexity:

- Nested for loop = `O(n^2)` ✅ Correct

Space complexity:

- numbers = O(1)
- numbers.length = O(n)
- temp = O(1)
  Which means the space complexity is O(n) ❌ Incorrect

ℹ️ I misinterpreted the space complexity calculations. We are not using any memory space beyond the two loop variables i & j, therefore
the space complexity is `O(1)`.

### Additional reading

- [Geek for geeks](https://www.geeksforgeeks.org/dsa/bubble-sort-algorithm/)

"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not efficient for large data sets as its average and worst-case time complexity are quite high."

_Advantages of Bubble Sort:_

- Bubble sort is easy to understand and implement.
- It does not require any additional memory space.
- It is a stable sorting algorithm, meaning that elements with the same key value maintain their relative order in the sorted output.

_Disadvantages of Bubble Sort:_

- Bubble sort has a time complexity of O(n2) which makes it _very slow_ for large data sets.
- Bubble sort has almost no or limited real world applications. It is mostly used in academics to teach different ways of sorting.

## Recursion

> When a function calls itself

Here is an example of a recursive function using a factorial algorithm:

Algorithm: Factorial
Input: a number, n
Output: the factorial of n, n!

Steps:

1. If n is 0:
2. return 1
3. Return n _ factorial(n - 1)
   _/

### Challenge:

Implement the factorial algorithm above:

```js
function factorial(n) {
  //Base
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1); //Recursion where the function calls itself
}
```

Every time a recursive function calls itself it takes up memory space in the call stack, as such the chain of recursive calls take up a lot of memory space which impacts space complexity.

Read more: https://launchschool.com/books/advanced_dsa/read/time_and_space_complexity_recursive

![Time complexity of factorial](assets/time_complexity_factorial.png)

![Space complexity of factorial](assets/space_complexity_factorial.png)

## Merge sort

> A fast sorting algorithm with a time complexity of O(n log n), which is a huge improvement over O(n^2).

Here's a step-by-step explanation of how merge sort works:

1. _Divide_: Divide the list or array recursively into two halves until it can no more be divided.
2. _Conquer_: Each subarray is sorted individually using the merge sort algorithm.
3. _Merge_: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.

_Advantages and Disadvantages of Merge Sort_

_Advantages_

- Stability : Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.
- Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(N logN) , which means it performs well even on large datasets.
- Simple to implement: The divide-and-conquer approach is straightforward.
- Naturally Parallel : We independently merge subarrays that makes it suitable for parallel processing.

_Disadvantages_

- Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process.
- Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.
- Merge Sort is Slower than QuickSort in general as QuickSort is more cache friendly because it works in-place.

```js
function mergeSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }
  const mid = Math.floor(numbers.length / 2);
  const leftHalf = numbers.slice(0, mid);
  const rightHalf = numbers.slice(mid);
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(leftHalf, rightHalf) {
  const result = [];
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
    if (leftHalf[leftPointer] < rightHalf[rightPointer]) {
      result.push(leftHalf[leftPointer]);
      leftPointer++;
    } else {
      result.push(rightHalf[rightPointer]);
      rightPointer++;
    }
  }
  while (leftPointer < leftHalf.length) {
    result.push(leftHalf[leftPointer]);
    leftPointer++;
  }
  while (rightPointer < rightHalf.length) {
    result.push(rightHalf[rightPointer]);
    rightPointer++;
  }
  return result;
}
```

## Linear sort

This was my original implementation, which was well over-baked....

```js
export function linearSearch(numbers, target) {
  let result = 0; //SC: O(1) //❌ Unecessary, we can simply return the index or the -1
  if (numbers.length < 1) return -1; //❌ Unecessary, adds no value. Empty arrays would simply eject with -1 lower in the function.

  //❌ Bad, this is why I needed to use indexOf. Rather use a for(let i ==0) with the index in the loop.
  for (const number of numbers) {
    //❌ Bad this also has a hidden time complexity, as indexOf inside a loop combines to O(n²).
    //SC: O(1)
    if (number === target) {
      result = numbers.indexOf(number); //❌ Bad. indexOf returns the first occurence.
      return result;
    } else result = -1; //❌ Unecessary and bad we don't need this else path and it is redundant to return -1 for every failed loop.
  }
  return result; //❌ Unecessary  simply return -1
}

console.log(linearSearch([2, 8, 13, 4, 5], 5));

// Time complexity: O(n²) due to calling an O(n) operation (indexOf) inside an O(n) loop.
// Space complexity: O(1) =. we're only storing single length variables = constant extra memory.
```

This was the lecturer's approach, must simpler, cleaner and quicker. This is the _canonical_ approach:

> Canonical: The standard, widely accepted, “textbook” version of a solution.
> Rule of thumb for canonical: If another engineer sees it and immediately understands it without thinking, it’s canonical.

```js
export function linearSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
}

// Time complexity: O(n) due to single for loop
// Space complexity: O(1). Uses a constant amount of extra memory, no allocations, no helper structures.
```

## Binary search

> An efficient sorting algorithm with a time complexity of O(log n).

This was my initial solution (also see binarySearch.js):

```js
export function binarySearch(numbers, target) {
  const numbersLength = numbers.length;
  if (numbersLength < 1) return -1;

  //❌ This uses mixed bounds,
  let left = 0; // This is an inclusive bound
  let right = numbersLength; // This starts as an exclusive bound, then becomes inclusive below (right = mid - 1)

  //This then could become a problem with potential out-of-bounds access (numbers[mid] when mid === length)

  console.log('start', {
    numbers,
    left,
    right,
    target
  });

  //❌ A for() loop is not correct for a conditional search of this nature (Binary search) as this is a count based loop.
  // A while() loop would be more appropriate
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
```

And here is the instructors approach:

```js
export function binarySearch(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (numbers[m] === target) {
      return m;
    } else if (numbers[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

/* Time Complexity — O(log n). Why?
- Each loop iteration halves the search interval. Starting with n elements:
  - after 1 iteration → n / 2
  - after 2 iterations → n / 4
  - after k iterations → n / 2ᵏ

The loop stops when the interval size reaches 0.

/* Space Complexity — O(1) Why:
- The algorithm uses a constant amount of extra memory: l, r, m
- no recursion
- no auxiliary data structures
- Memory usage does not scale with input size.

This is called constant auxiliary space. 
*/
```

Some important learnings from this exercise:

1. _Binary search is condition-driven, not count-driven_
   a. The algorithm progresses until a search invariant breaks
   b. You do not know in advance how many iterations are required
   c. Termination depends on state, not iteration count

This means that a `while()` loop is more suitable (condition driven), over a `for()` loop (count driven).

There is also a failure mode with `while()` = "If it loops forever, the logic is wrong — which is exactly what you want to detect" that may be hidden in the `for()` loop.

Use the loop that _expresses why the loop runs_.

- while “Run while condition holds”
- for “Run a known number of times”

2. _Bounds define the search interval — the part of the array that is still a candidate._

At every step, the algorithm must maintain a search invariant:

“If the target exists, it is inside the current bounds.”

Break that invariant and the algorithm is wrong.
