// !!! Implementati folosind numai:
//  - length
//  - get valoarea de pe o pozitie: arr[0]
//  - set valoarea de pe o pozitie: arr[1] = "abc"

let arr = [1, 'abc', true];

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Intoarce true daca <value> exista in array-ul <arr>
function myIncludes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
}
// myIncludes
console.log(arr.includes(1) === myIncludes(arr, 1));
console.log(arr.includes('test') === myIncludes(arr, 'test'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Adauga <value> la finalul <arr> si intoarce noua lungime a arr
function myPush(arr, value) {
  arr[arr.length] = value;
  return [arr, arr.length];
}
// myPush
console.log(myPush(arr, 'test'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Scoate ultima valoare din <arr> si o intoarce ca rezultat
function myPop(arr) {
  const last = arr[arr.length - 1];
  arr[arr.length - 1] = undefined;
  return [arr, last];
}
// myPop
console.log(myPop(arr));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Adauga <value> la inceputul <arr> si intoarce noua lungime a arr
function myUnshift(arr, value) {
  //   const newArr = [];
  //   for (let i = 0; i <= arr.length; i++) {
  //     if (i === 0) {
  //       newArr[i] = value;
  //     } else {
  //       newArr[i] = arr[i - 1];
  //     }
  //   }
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = value;
  return [arr, arr.length];
}
// myUnshift
console.log(myUnshift(arr, 'test'));

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Scoate prima valoare din <arr> si o intoarce ca rezultat
function myShift(arr) {
  const first = arr[0];
  arr[0] = undefined;
  return [first, arr.length - 1];
}
// myShift
console.log(myShift(arr));
