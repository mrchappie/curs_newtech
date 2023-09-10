let a = [0, 1, 2, 0, 0, 1, 2, 0],
  b = [3, 4, 0, 2, 2, 3, 4];

/**
 * [0, 1, 2] union [1, 2, 3, 4] = [0, 1, 2, 3, 4]
 */
function union(...params) {
  const newArr = [];

  for (let i = 0; i < params.length; i++) {
    newArr.push(...params[i]);
  }

  return Array.from(new Set(newArr));
}

/**
 * [0, 1, 2] intersection [1, 2, 3, 4] = [1, 2]
 */
function intersection(a, b) {
  const newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }

  //   return Array.from(new Set(newArr));
  return newArr;
}

/**
 * [0, 1, 2] diff [1, 2, 3, 4] = [0]
 * [1, 2, 3, 4] diff [0, 1, 2] = [3, 4]
 */
function diff(a, b) {
  const newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }

  //   return Array.from(new Set(newArr));
  return newArr;
}

console.log(union([0, 1, 2], [1, 2, 3, 4])); // [0, 1, 2, 3, 4]
console.log(intersection([0, 1, 2], [1, 2, 3, 4])); // [1, 2]
console.log(diff([0, 1, 2], [1, 2, 3, 4])); // [0]
console.log(diff([1, 2, 3, 4], [0, 1, 2])); // [3, 4]
