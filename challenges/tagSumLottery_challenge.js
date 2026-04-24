/*Challenge:
**********

The Dinosaur social network management team wants to hold a daily lottery for all participants in the social network.
 The way it works is that each communication initiated on the network is tagged with a unique number, 
 and at the end of the day pairs of winners are selected. The pairs of winners are selected by first generating 
 a random lottery number, then finding all the pairs of names of those who initiated the communications 
 with the tags that add up to the lottery number. 

There are billions of communications taking place every day, so the team needs a super fast algorithm that can 
find the pairs of winners quickly.

Take a look at the algorithm currently proposed. It's very slow. It runs in O(n^2) time. 

Your job is to improve the time complexity to something better than O(n^2).


Tasks:
*******

1. Write a faster algorithm.
2. Implement it.
3. Analyze its time complexity.


Example:
********

communications = [
  { tag: 10, name: "Tim the T-Rex" },
  { tag: 26, name: "Vince the Veloci" },
  { tag: 40, name: "Sue the Bellu" },
  { tag: 47, name: "Dean the Edmon" },
  { tag: 15, name: "Sam the Seismo" },
  { tag: 24, name: "Karen the Cryol" }
]
lotteryNumber = 50
winners = [
  ["Sue the Bellu", "Tim the T-Rex"],
  ["Karen the Cryol", "Vince the Veloci"]
]


Constraints:
************

- communications.length >= 0


Notes:
******

1. Each pair of names must be two different names. You cannot pair a name with itself.
2. The names in each pair must be sorted in alphabetical order.
3. Feel free to go back to the maps lesson to brush up if needed. 
4. Check out `hints.md` if needed.
*/

// The original algorithm:
// Your job is to improve the time complexity to something better than O(n^2).
export function tagSumLottery(communications, lotteryNumber) {
  const winners = [];
  for (let i = 0; i < communications.length; i++) {
    for (let j = i + 1; j < communications.length; j++) {
      if (communications[i].tag + communications[j].tag === lotteryNumber) {
        winners.push(
          [communications[i].name, communications[j].name].toSorted()
        );
      }
    }
  }
  if (winners.length > 0) {
    return winners;
  }
  return 'No winners';
}

// The updated algorithm:

export function tagSumLottery(communications, lotteryNumber) {
  if (!communications || !communications.length) return 'No winners (No comms)';

  const winners = [];
  const tagNames = new Map(); //Maps have a lookup of O(1)

  for (const { tag, name } of communications) {
    const result = lotteryNumber - tag;
    if (tagNames.has(result)) {
      const match = tagNames.get(result);
      winners.push([name, match].toSorted());
    } else {
      tagNames.set(tag, name);
    }
  }

  if (!winners.length) return 'No winners';
  return winners;
}

// Instructors solution:
/*
Algorithm: Tag Sum Lottery
Input: array of objects, each has a tag and name, and a lottery number
Output: array of pairs of names, whose tags add up to the lottery number. Each pair is sorted alphabetically. If there are no winners, return the string "No winners".

Steps:
1. Init a winners array.
2. Init a tagName map.
3. Loop over the array:
4.   If the difference between the lottery number and the current tag is in the map:
5.     Add both the name the tag found in the map maps to, and the current name, as an array, sorted, to the winners array.
6.   Else:
7.     Add the current tag and name to the map.
8. If we found pairs of winners:
9.   Return them.
10. Return "No winners".  
*/

export function tagSumLottery(communications, lotteryNumber) {
  const winners = [];
  const tagName = new Map();
  for (let i = 0; i < communications.length; i++) {
    const difference = lotteryNumber - communications[i].tag;
    if (tagName.has(difference)) {
      winners.push(
        [tagName.get(difference), communications[i].name].toSorted()
      );
    } else {
      tagName.set(communications[i].tag, communications[i].name);
    }
  }
  if (winners.length > 0) {
    return winners;
  }
  return 'No winners';
}
