console.log([1, 3, 6, 2, 7].sort());
console.log(['a', 'b', 'e', 'g', 'q'].sort());
console.log(
  [1, 2, 3, 4, 5, 6, 23, 55, 32, 26, 62, 62, 72, 7, 2, 72, 3, 7, 7].sort()
);

function swap(arr, p1, p2) {
  const aux = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = aux;
  return arr;
}

function positionOfMinInArray(arr, start) {
  //   return Math.min(...arr.slice(start));

  let min = arr[start],
    minIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
}

const arr = [0, 1, 2, 3, 4];
console.log(arr); // [0, 1, 2, 3, 4]
console.log(swap(arr, 2, 4));
console.log(arr); // [0, 1, 4, 3, 2]

console.log(positionOfMinInArray([4, 2, 1, 5, 3], 0)); //1
console.log(positionOfMinInArray([4, 2, 1, 5, 3], 3)); //3

// SELECTION SORT
// Pentru i de la 0 la arr.length - 2:
//      1) Gasim minimul dintre elementele
//      de la pozitia i pana la finalul arr
//      2) Daca pozitia minimului nu este
//      pozitia curenta, inversam valoarea
//      de pe pozitia curenta cu cea a minimului
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const minPosition = positionOfMinInArray(arr, i);

    if (minPosition !== i) {
      swap(arr, i, minPosition);
    }
  }
}

const arrToSort = [64, 25, 12, 22, 11];
selectionSort(arrToSort);
console.log(arrToSort);
