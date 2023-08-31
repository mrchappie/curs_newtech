function encodeRailFenceCipher(string, numberRails) {
  // Algorithm
  // 1. create n rails
  const rails = [];
  for (let i = 0; i < numberRails; i++) rails.push('');
  console.log(rails);

  // 2. create a "rail selector" variable
  // (Holds the positions of the current line
  // to add a letter to)
  let currentRail = 0,
    incr = 1;

  // 3. iterate through the text
  for (let i = 0; i < string.length; i++) {
    // 3.1. add the current letter to its corresponding rail
    rails[currentRail] += string[i];

    // 3.2. select the next rail

    if (currentRail === numberRails - 1) {
      incr = -1;
    }
    if (currentRail === 0) {
      incr = 1;
    }

    currentRail += incr;
  }

  return rails.join('');
}

console.log(
  encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3),
  'WECRLTEERDSOEEFEAOCAIVDEN'
);
console.log(encodeRailFenceCipher('Hello, World!', 3), 'Hoo!el,Wrdl l');
