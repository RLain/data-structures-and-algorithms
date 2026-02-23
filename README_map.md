# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Map

A collection of unique key-value pairs with O(1) lookup time complexity.

When to use a map:

- Unique keys
- Fast lookup

```js
// Define a new map
const idNames = new Map();

// Set key-value pairs
idNames.set(1, 'Tim the T-Rex');
idNames.set(2, 'Vince the Veloci');
idNames.set(3, 'Sue the Bellu');

// Get the value a specific key maps to
console.log(idNames.get(3));

// Iterate over the keys of the map
for (const id of idNames.keys()) {
  console.log(idNames.get(id));
}

// Check if the map has a key
const key = 4;
if (idNames.has(key)) {
  console.log(`${key} found!`);
}

// Delete a key (with its value) from the map
idNames.delete(2);

// Get the size of the map
console.log(idNames.size);
```

## Challenge:

What's the time complexity of the algorithm below?

```js
export function findNamesOfDuplicates(dinos) {
  const namesOfDuplicates = [];
  for (let i = 0; i < dinos.length; i++) {
    for (let j = i + 1; j < dinos.length; j++) {
      if (dinos[i].id === dinos[j].id) {
        namesOfDuplicates.push(dinos[i].name);
        namesOfDuplicates.push(dinos[j].name);
      }
    }
  }
  return namesOfDuplicates;
}
```

_Time complexity_:
We have a nested for() loop.

- The first loops through the array starting at the first position for the array's length = O(n)
- The second loops through the array starting at the second position for the array's length = O(n)
  Total =O(n^2)
