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
    let mid = left + Math.floor(right - left) / 2;
    console.log('mid', mid);
    if (numbers[mid] === target) return mid;
    else if (mid < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    console.log('end', {
      left,
      right,
      mid,
      target
    });
  }
}

console.log(binarySearch([2, 4, 5, 8, 13, 21], 5));
