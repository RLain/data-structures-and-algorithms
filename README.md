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

![Time Complexity](assets/time_complexity.png)
