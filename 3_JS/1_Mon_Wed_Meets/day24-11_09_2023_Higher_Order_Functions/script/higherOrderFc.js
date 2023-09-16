// MAP
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function f(element) {
  console.log('Element is', element);
  return element * 2;
}

console.log(arr.forEach(f));
console.log(arr.map(f));
