const arr = [
  '1',
  'b',
  { one: 1, two: 2, three: ['c', 'd', 'e', { f: 'f', g: 'g' }] },
  100,
  1000,
  10000,
];

// shallow copy

const shallowCopy = [...arr];
// deep copy
const deepCopy = structuredClone(arr);

// modifications on initial array
arr[0] = '';
arr[2] = '';

// logs
console.log(arr);
console.log(shallowCopy);
console.log(deepCopy);
