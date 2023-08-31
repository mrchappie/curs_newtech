// ----- number As String
const numberAsString = '3.14';
console.log(Number(numberAsString));
console.log(parseInt(numberAsString));
console.log(parseFloat(numberAsString));
console.log(+numberAsString);

// ----- negative Number As String
const negativeNumberAsString = '-3.14';
console.log(Number(negativeNumberAsString));
console.log(parseInt(negativeNumberAsString));
console.log(parseFloat(negativeNumberAsString));
console.log(+negativeNumberAsString);

// ----- string Starting With Number
const stringStartingWithNumber = '3.14ab.12';
console.log(Number(stringStartingWithNumber));
console.log(parseInt(stringStartingWithNumber));
console.log(parseFloat(stringStartingWithNumber));
console.log(+stringStartingWithNumber);

// ----- string With Numbers
const stringWithNumbers = 'x3.14ab.12';
console.log(Number(stringWithNumbers));
console.log(parseInt(stringWithNumbers));
console.log(parseFloat(stringWithNumbers));
console.log(+stringWithNumbers);

// ----- sectioned Number
const sectionNo = '1.2.3';
console.log(Number(sectionNo));
console.log(parseInt(sectionNo));
console.log(parseFloat(sectionNo));
console.log(+sectionNo);

console.log('positive exponent', Number(1e5));
console.log('negative exponent', Number(1e-5));
console.log('binary number', 0b1011);
console.log('octal number', 0o1011);
console.log('hexadecimal number', 0x1011);

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
