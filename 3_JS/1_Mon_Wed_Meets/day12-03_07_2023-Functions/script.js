const array = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const elemRemoved = arr.splice(i, 1);
      arr.unshift(elemRemoved[0]);
    }
  }
  return arr;
}

console.log(sort(array));
