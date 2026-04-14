import { Queue } from './queue';

// This was my approach, with nudging by GPT:

//Iterate through the array
// We have an array e.g. [12, 14, 12, 10]
// We need to iterate through the array, checking if each element matches any others and returning the first one that does not.
// We have a queue at our disposal, which is FIFO, and we can enqueue/dequeue/peek etc

export function findFirstUniqueDinosaurAge(ages) {
  if (!ages.length) return;

  const map = new Map(); //To track the occurence of a number e.g. 14 => 2 and 16 => 1
  const queue = new Queue(); //To manage the uniqueness and allow us to return the first

  for (const age of ages) {
    const current = map.get(age) || 0;
    map.set(age, current + 1);
    queue.enqueue(age);

    while (!queue.isEmpty() && map.get(queue.peek()) > 1) {
      queue.dequeue();
    }
  }

  return queue.isEmpty() ? 'No unique age was found.' : queue.peek();
}

//This was the lectruers approach

/*
Algorithm: First Unique Dinosaur Age
Input: stream of dinosaur ages as an array
Output: first unique age, or "No unique age was found."

Steps:
1. Init a queue for the ages in the order they arrived.
2. Init a map for age frequency.
3. Loop over the stream of ages:
4.   Enqueue the age to the queue.
5.   Update its frequency in the map.
6. While there are ages in the queue:
7.   Dequeue an age.
8.   If it has a frequency of 1:
9.     Return it.
10. After going over the entire queue with no unique age, return the string "No unique age was found.".
*/

import { Queue } from './queue';

export function findFirstUniqueDinosaurAge(ages) {
  const queue = new Queue();
  const ageFrequency = new Map();

  // Time complexity: O(n)

  for (const age of ages) {
    queue.enqueue(age);
    if (!ageFrequency.has(age)) {
      ageFrequency.set(age, 1);
    } else {
      ageFrequency.set(age, ageFrequency.get(age) + 1);
    }
  }

  // Time complexity: O(n)
  while (!queue.isEmpty()) {
    const age = queue.dequeue();
    if (ageFrequency.get(age) === 1) {
      return age;
    }
  }

  return 'No unique age was found.';
}

// Time complexity: O(n)
// Space complexity we are using a queue and map = O(n)
