const array = ['app', 1, 2, 'app', 'apple', 4, 6, 7, 'pig', 'app'];

function getOccurances(arr, str) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i] === str) {
      newArr.push(i);
    }
  }

  return newArr;
}

console.log(getOccurances(array, 'app'));
w