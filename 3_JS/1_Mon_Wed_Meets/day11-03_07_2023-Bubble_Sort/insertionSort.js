// INSERTION SORT
//
// Introduc elementele unui array pe rand,
// pe pozitia corecta dpdv al ordinii
// intr-un array nou.
// EX:
//  sorted = []
// Inserez 3 => sorted = [3]
// Inserez 1 => sorted = [1, 3]
// Inserez 4 => sorted = [1, 3, 4]
// Inserez 0 => sorted = [0, 1, 3, 4]
// Inserez 2 => sorted = [0, 1, 2, 3, 4]

// SCRIS DE MATEI
const array = [3, 2, 4, 1, 0];

function insertionSort(arr) {
  if (arr.length === 0) return arr;
  const sorted = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const valueToInsert = arr[i];
    let insertIndex = 0;

    while (sorted[insertIndex] < valueToInsert) {
      insertIndex++;
    }

    sorted.splice(insertIndex, 0, valueToInsert);
  }

  return sorted;
}

console.log(insertionSort(array));
