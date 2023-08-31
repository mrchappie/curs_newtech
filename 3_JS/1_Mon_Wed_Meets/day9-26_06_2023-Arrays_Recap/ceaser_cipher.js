// prettier-ignore
const alphabet = 
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
'w', 'x', 'y', 'z'];

function encryption(string, positions) {
  let newString = '';
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      newString += arr[i];
    } else {
      const indexOfLetter = alphabet.indexOf(arr[i]);
      if (indexOfLetter > 3) {
        newString += alphabet[indexOfLetter - positions];
      } else {
        newString += alphabet[alphabet.length - indexOfLetter - positions];
      }
    }
  }

  return newString;
}

console.log(encryption('this is a test', 3));

function decryption(string, positions) {
  let newString = '';
  const arr = string.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      newString += arr[i];
    } else {
      const indexOfLetter = alphabet.indexOf(arr[i]);
      if (indexOfLetter < alphabet.length - 3) {
        newString += alphabet[indexOfLetter + positions];
      } else {
        newString += alphabet[alphabet[0] - indexOfLetter + positions];
      }
    }
  }

  return newString;
}
console.log(decryption(encryption('this is a test', 3), 3));
