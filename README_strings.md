# data-structures-and-algorithms

Scrimba course: https://scrimba.com/data-structures-and-algorithms-c0shn6ckdm

# Strings

Strings are not considered their own data type, but are extremely important in programming.

- Strings are immutable, meaning you cannot change a character within a string (opposed to array elements which are mutable).

Here are some common interactions with strings:

```js
const coldSeason = "winter"; //Single string
const seasons = ["winter", "spring", "summer", "fall"]; //Array of strings

const greeting = "hello";
console.log(greeting[0]); // Gives you "h".
console.log(greeting.length); // Gives you 5.

greeting[0] = "H"; // This doesn't work but fails silently.
console.log(greeting); // greeting is still "hello".

//Becca note: Remember that this exists -> In JavaScript, the .reverse() method is a built-in function used to reverse the order of elements in an array or a typed array in place, meaning it modifies the original array.
// The following is purely an example to showcase splitting and interacting with strings.
function reverse(string) {
  const characters = string.split(""); // Splits a string into an array of characters.
  let left = 0;
  let right = characters.length - 1;
  while (left < right) {
    const temp = characters[left];
    characters[left] = characters[right];
    characters[right] = temp;
    left++;
    right--;
  }
  const reversed = characters.join(""); // Joins an array of characters back to a string.
  return reversed;
}

console.log(reverse("hello")); // Gives you "olleh".

let word = "Go";
const upperCase = word.toUpperCase(); // Gives you "GO".
const lowerCase = word.toLowerCase(); // Gives you "go".
const letter = "a";
const code = letter.charCodeAt(0); // Gives you the UTF16 code for the character e.g. a = 97.
const char = String.fromCharCode(code); // Give you the alphabetical letter from a UTF16 code e.g. 97 = "a"
```

## Challenge: Palindrome

```bsh
Challenge:
*********

In the Dinosaur social network, the younger generation of dinos is following a new trend of having a username that is a palindrome, with mixed-case letters, both uppercase and lowercase, and possibly digits. For example: "TREXerT", "Veloc1COLEv", and so on. Many of those users want to form groups of users like themselves who follow the cool palindrome trend. Build the backend functionality to help them find their peers. Write a function, `findAllPalindromes`, that takes an array of usernames, and returns an array of all the usernames that are palindromes, ignoring the letter case.

Remember, a palindrome is a string that reads the same forwards and backwards. For example:

"bob" -> palindrome
"tim" -> not a palindrome

In addition, in our algorithm, "Bob", and "zAAaaZ" are also palindromes since we are ignoring the letter case.


Examples:
********

Example 1:
usernames = ["Tricer66", "TREXerT", "Veloc1COLEv", "stego95"]
result = ["TREXerT", "Veloc1COLEv"]

Example 2:
usernames = ["nigersaurus111", "BRACHI33"]
result = []


Constraints:
************

1. usernames.length >= 0.
2. A username may only contain letters and digits but must start with a letter. The letters can be uppercase or lowercase.
3. username.length > 0.


Tasks:
******

1. Write the algorithm as steps in plain English.
2. Implement the steps in JavaScript.
3. Run the tests in the terminal using the command `npm test`. If a test doesn't pass, debug your code and fix what's wrong.
4. When you’re done, analyze the time and space complexity of your algorithm and write it down in Big O notation.


Notes:
******

1. There is more than one way to solve this challenge. This will be true with most of the challenges you will see in this course, and in problem solving in general.
2. If you need to, feel free to go back to the previous lesson on strings to brush up.
3. Lastly, and only if you absolutely need to, I added some hints for you in `hints.md` to check out.
```

```js
export function findAllPalindromes(usernames) {
  let outcome = []; //SC: O(1)

  if (!usernames.length) return outcome; //TC: O(1)

  usernames.map((username) => {
    if (!username.length) return;
    const normalisedName = username.toLowerCase(); //SC: O(k)
    const originalName = normalisedName.split(""); //SC: O(k)
    const reversedName = [...originalName].reverse(); //SC: O(k)
    //Note I initially tried to directly compare the arrays e.g. originalName === reversedName which is FALSE because remember....arrays compare locations in memory! Not the values. We actually need to compare the string values.
    if (originalName.join("") === reversedName.join("")) {
      console.log("Matching", originalName, reversedName);
      outcome.push(username);
    }
  }); //For the map = TC: O(k)
  return outcome;
}

// Time complexity: O(k)
// Space complexity: O(k)
```
