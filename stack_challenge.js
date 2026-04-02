/* This challenge was to leverage off a Stack
Challenge:
**********

You are familiar with human mathematical expressions like (1 + 2) * 5. We humans use parentheses, "(" and ")", to group parts of the expression together and determine the order of evaluation. Dinosaurs, on the other hand, use angle brackets, "<" and ">". We would like to help the Dinosaur Data Management System validate expressions. A valid expression is one that has a matching closing bracket for each opening bracket. Brackets are the only characters we care about here.


Examples:
**********

Example 1:
```
exp = <1 + 2> * 5
valid = true
```

Example 2:
```
exp = <<1 + 2> * 5> + <6 + 7>
valid = true
```

Example 3:
```
exp = <<1 + 2> * 9
valid = false
```

Example 4:
```
exp = <1 + 2> * 9>
valid = false
```


Task:
*****

Implement the function isValid() that takes a string representing an expression, and returns `true` or `false` indicating the validity of the expression.
1. Write the algorithm.
2. Implement it.
3. Run the tests to make sure it works as expected.
4. Analyze its time and space complexity.


Constraints:
************

1. exp.length >= 0


Notes:
******

1. Use the Stack class provided. 
2. Check out `hints.md` if needed.
*/

//Here are the tests

import { isValid } from './isValid';
import { describe, test, expect } from 'vitest';

describe('isValid', () => {
  test('validates a valid simple expression', () => {
    const exp = '< 1 + 2 > * 5';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });

  test('validates a valid complex expression', () => {
    const exp = '<<1 + 2> * 5> + <6 + 7>';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid simple expression', () => {
    const exp = '<<1 + 2> * 9';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid complex expression', () => {
    const exp = '<<1 + 2>> * 5> + <6 + 7>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression that starts with a closing bracket', () => {
    const exp = '><1 + 2>> * 5 + <6 + 7>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression of just one opening bracket', () => {
    const exp = '<';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an invalid expression of just one closing bracket', () => {
    const exp = '>';
    const result = false;
    expect(isValid(exp)).toBe(result);
  });

  test('validates an empty expression', () => {
    const exp = '';
    const result = true;
    expect(isValid(exp)).toBe(result);
  });
});

// #1 Here was my first approach, wildy wildy over cooked and wrong

import { Stack } from './stack';

export function isValid(exp) {
  console.log('string', exp);
  if (exp === '') return true;

  //Your solution counts '<' and '>' but doesn't check their order. How can you use a stack to match each closing bracket with the most recent opening bracket?
  const array = exp.split(' ');
  const newStack = new Stack(array);
  console.log('newStack', newStack);
  console.log('isEmpty', newStack.isEmpty());
  console.log('>', newStack.peek().includes('>'));
  console.log('newStack.size()', newStack.size());

  if (newStack.isEmpty()) return false;

  const originalStackSize = newStack.size();
  let output = [];

  console.log('About to invoke for loop');
  for (let i = 0; i < originalStackSize; i++) {
    console.log('newStack.peek', newStack.peek());
    if (!newStack.peek().includes('>') && !newStack.peek().includes('<')) {
      console.log('Popping...', newStack.peek());
      newStack.pop();
    } else {
      output.push(newStack.peek());
      newStack.pop();
    }
  }

  console.log('output', output);
  const result = newStack.size % 2 !== 0 ? false : true;
  console.log('result', result);
  return result;
}

// #2 After some circle spinning, I realised I was thinking about this completely wrong. The stack doesn't need
// interacting with for every element, just the important ones (the parenthesis)

import { Stack } from './stack';

export function isValid(exp) {
  if (exp === '') return true;
  const stack = new Stack([]);

  for (const el of exp) {
    // This was a major game change, I was trying to do some way overbaked array looping and flattening...
    if (el.includes('<')) {
      stack.push('<');
    }

    if (el.includes('>')) {
      if (stack.size() === 0) return false;
      stack.pop();
    }
  }

  if (stack.size() === 0) return true;

  return false;
}

// BIG learning: If you want to iterate through a string, iterate using for(of)!

// This was the instructors approach, I clearly forgot about the isEmpty method...

import { Stack } from './stack';

export function isValid(exp) {
  const stack = new Stack();
  for (const char of exp) {
    if (char === '<') {
      stack.push(char);
    } else if (char === '>') {
      if (!stack.isEmpty() && stack.peek() === '<') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
