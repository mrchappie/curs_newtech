// n = 1:
// 00

// n = 2:
// 00			01
// 10			11

// n = 3:
// 00			01			02
// 10			11			12
// 20			21			22

// n = 4:
// 00			01			02			03
// 10			11			12			13
// 20			21			22			23
// 30			31			32			33

function data(n) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      const elem = i.toString() + j;
      matrix[i].push(elem);
    }
  }

  return matrix;
}

console.log(data(1));
console.log(data(2));
console.log(data(3));
console.log(data(4));
