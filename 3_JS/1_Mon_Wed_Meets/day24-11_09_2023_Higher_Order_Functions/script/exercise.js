// Exercitiu forEach:
// Implementati o functie care sa calculeze suma elementelor (valori numerice) unui array,
// folosind functia forEach.

// BONUS: Modificati functia pentru a functiona si pe obiecte
// de tip set si map care contin tot valori numerice.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let setList = new Set(arr);
let mapList = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
]);

function calculateSum(list) {
  let sum = 0;
  list.forEach((element) => {
    sum += element;
  });

  return sum;
}

console.log(arr);
console.log(setList);
console.log(mapList);

console.log(calculateSum(arr));
console.log(calculateSum(setList));
console.log(calculateSum(mapList));
