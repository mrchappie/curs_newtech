// Scris de Matei
function mySplice(arr, start, deleteCount, itemsToInsert) {
  const deleted = [],
    l = arr.length;

  if (start === undefined) return [];

  if (deleteCount === undefined) deleteCount = l - start;

  for (let i = start; i < l; i++) {
    if (i < start + deleteCount) deleted.push(arr[i]);
    arr[i] = arr[i + deleteCount];
  }

  if (itemsToInsert !== undefined && itemsToInsert.length > 0) {
    const il = itemsToInsert.length;

    for (let i = l - 1 + il; i >= start + il; i--) {
      arr[i] = arr[i - il];
    }

    for (let i = start; i < start + il; i++) {
      arr[i] = itemsToInsert[i - start];
    }
  }

  return deleted;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let splicedArr;
console.log(arr);

console.log('--------------');
splicedArr = arr.slice();
console.log(splicedArr.splice()); // []
console.log(splicedArr); // [0, 1, 2, ..., 9]
splicedArr = arr.slice();
console.log(mySplice(splicedArr)); // []
console.log(splicedArr); // [0, 1, 2, ..., 9]

console.log('--------------');
splicedArr = arr.slice();
console.log(splicedArr.splice(1)); // [0, 1, 2, ..., 9]
console.log(splicedArr); // [0]
splicedArr = arr.slice();
console.log(mySplice(splicedArr, 1)); // [0, 1, 2, ..., 9]
console.log(splicedArr); // [0]

console.log('--------------');
splicedArr = arr.slice();
console.log(splicedArr.splice(3, 5)); // [3, 4, 5, 6, 7]
console.log(splicedArr); // [0, 1, 2, 8, 9]
splicedArr = arr.slice();
console.log(mySplice(splicedArr, 3, 5)); // [3, 4, 5, 6, 7]
console.log(splicedArr); // [0, 1, 2, 8, 9]

console.log('--------------');
splicedArr = arr.slice();
console.log(splicedArr.splice(1, 7, 'a', 'b', 'c')); // [1, 2, 3, 4, 5, 6, 7]
console.log(splicedArr); // [0, 'a', 'b', 'c', 8, 9]
splicedArr = arr.slice();
console.log(mySplice(splicedArr, 1, 7, ['a', 'b', 'c'])); // [1, 2, 3, 4, 5, 6, 7]
console.log(splicedArr); // [0, 'a', 'b', 'c', 8, 9]
