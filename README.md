# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Introduction

- Data structures: Structures to orgnanize and process data
- Algorithms: Instructions to process data

_Why study DSA (Data Structures & Algorithms)?_

1. To learn the tools for efficient problem solving
2. To understand your tools
3. To prep for coding interviews

# Big O Notation

A way to describe how fast an algorithm runs in relation to the input.

- O(n) e.g. a for loop
- O(n^2) e.g. nested for loop

Assuming **1 operation = 1 second**, here’s a table with time in seconds:

|         n | O(n) time (seconds) | O(n²) time (seconds) |
| --------: | ------------------: | -------------------: |
|        10 |                10 s |                100 s |
|        50 |                50 s |              2,500 s |
|       100 |               100 s |            ~ 3 hours |
|     1,000 |        ~ 17 minutes |            ~ 12 days |
| 1,000,000 |            ~12 days |       ~ 31,710 years |

That’s the real cost of quadratic growth, and we can clearly see the efficiency impact.

## Constant time = O(1)

This is the most efficient type of algorithm. It means regardless of the input the output execution is always the time.

For example:

```js
const printInput = (n) => {
  console.log(`There are ${n} dinosaurs`);
};

//These will take the same amount of time to print:
printInput(3);
printInput(1000);
```

## Time Complexity

In theoretical computer science, the time complexity is the computational complexity that describes `the amount of computer time it takes to run an algorithm`.

![Time Complexity](assets/time_complexity.png)

### Challenge

Analyze the time complexity of the following 4 functions. For each function, just write down its time complexity in terms of Big O notation. In other words, answer the question: Is it an O(n), O(n^2), or O(1) algorithm?

```js
function sum(n) {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    sum += num;
  }
  return sum;
}

// Time complexity: O(n) - we have a function that takes in a param and iterates over that param once. (Linear)

function printMultiplicationTable(n) {
  for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
      console.log(`${a} x ${b} = ${a * b}`);
    }
  }
}
// Time complexity: O(n^2) - we have a function that takes in a param and iterates over that param twice (Quadratic)

function isPositive(n) {
  return n > 0;
}
// Time complexity: O(1) - the execution of this function is the same regardless of the input param. Will always take the same amount of time (Constant)

function printTriangle() {
  for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line = line + "*";
    }
    console.log(line);
  }
}
// Time complexity: O(1) - sneaky one but because this doesn't take in a param it is constant whenever executed. This is because the execution is constant, it always iterates 5 times.

// console.log(sum(100))
// printMultiplicationTable(10)
// console.log(isPositive(100))
printTriangle();
```

## Space Complexity

The `amount of memory space an algorithm uses during execution in relation to the input`.
