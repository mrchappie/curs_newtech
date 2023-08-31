const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// mySlice
function mySlice(arr, start, end) {
  const newArr = [];

  // start & end params are not given
  if (!start && !end) return arr;

  // only start param or both are given
  if (start >= 0) {
    for (let i = start; i < (end ? end : arr.length); i++) {
      // newArr.push(arr[i]);
      newArr[i - start] = arr[i];
    }
  }

  //  only start param is given but it's < 0
  if (start < 0) {
    for (let i = arr.length + start; i < arr.length; i++) {
      // newArr.push(arr[i]);
      newArr[i - (arr.length + start)] = arr[i];
    }
  }

  //  end pram is < 0
  if (end < 0) {
    for (let i = start; i < arr.length + end; i++) {
      // newArr.push(arr[i]);
      newArr[i - start] = arr[i];
    }
  }

  return newArr;
}

console.log(arr.slice()); // [0, 1, 2, ..., 9]
console.log(mySlice(arr)); // [0, 1, 2, ..., 9]

console.log(arr.slice(5)); // [5, 6, 7, 8, 9]
console.log(mySlice(arr, 5)); // [5, 6, 7, 8, 9]

console.log(arr.slice(2, 7)); // [2, 3, 4, 5, 6]
console.log(mySlice(arr, 2, 7)); // [2, 3, 4, 5, 6]

console.log(arr.slice(-2)); // [8, 9]
console.log(mySlice(arr, -2)); // [8, 9]

console.log(arr.slice(7, -1)); // [7, 8]
console.log(mySlice(arr, 7, -1)); // [7, 8]
