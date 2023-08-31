// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr = new Array(2).fill();
// const newArr = arr.map((elem, index) => (elem = index));

// for (let i = 0; i < arr.length; i++) {
//   //   arr[i] = 0;
// }
// console.log(arr);
// console.log(newArr);

// Add elements
let arr = [];
arr.push(1, 23, 45);
console.log(arr);
console.log(arr.push());

// Remove elements from end
arr.pop();
// console.log(arr.pop());
console.log(arr);

// Remove elements from start
arr = [];
arr.unshift(12);
console.log(arr);
console.log(arr.shift());
console.log(arr);

// Reverse
arr = [1, 2, 3];
console.log(arr.reverse());

// Concat
console.log(arr.concat('New', 'Old'));
console.log(arr);

// Join
console.log(arr.join(''));

// indexOf
console.log(['c', 'd', 'a', 'a'].indexOf('a'));
console.log(['c', 'd', 'a', 'a'].indexOf('a', 3));
console.log(['c', 'd', 'a', 'b', 'a'].lastIndexOf('a'));
