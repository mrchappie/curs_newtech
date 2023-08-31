function bubbleSort(arr) {
  let itSwapped = false;

  do {
    itSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        itSwapped = true;
        const first = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = first;
      }
    }
  } while (itSwapped);

  return arr;
}

console.log(bubbleSort([1, 5, 2, 7, 9, 6, 3, 8, 4, 0]));
console.log(bubbleSort(['aaa', 'bbb', 'ccc', 'aba', 'abb', 'aca', 'acc']));
console.log(bubbleSort(['ana', 'are', 'mere', 'si', 'pere']));
