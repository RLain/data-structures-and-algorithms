export function linearSearch(numbers, target){
  let result = 0;
  if(numbers.length <1) return -1

  for(const number of numbers){
    if(number === target){
        result = numbers.indexOf(number)
        return result
    } else result = -1
  }
  return result
}

console.log(linearSearch([2, 8, 13, 4, 5], 5))

//Clever but not canonical:
export const linearSearch = (numbers, target) =>
  numbers.findIndex(n => n === target)

console.log(linearSearch([2, 8, 13, 4, 5], 21))

