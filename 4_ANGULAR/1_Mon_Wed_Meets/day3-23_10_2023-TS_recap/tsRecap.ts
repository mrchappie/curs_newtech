function toOrFromNumber(input: number | string): number | string {
  if (typeof input === 'number') return input.toString();
  return +input;
}

// let s = '1',
//   n = 3;
// console.log(toOrFromNumber(s), typeof toOrFromNumber(s));
// console.log(toOrFromNumber(n), typeof toOrFromNumber(n));

function padWithZeros(input: number): number;
function padWithZeros(input: string): string;
// function padWithZeros(input: number | string): number | string;
function padWithZeros(input: number | string): number | string {
  if (typeof input === 'number') return input * 10;
  return input + '0';
}

let s = '1';
let paddedS = padWithZeros(s);
console.log(padWithZeros(s));
console.log(paddedS.concat('$'));
