function countChars(string) {
  const countOfChars = {};

  for (let i = 0; i < string.length; i++) {
    if (countOfChars[string[i]]) {
      countOfChars[string[i]]++;
    } else {
      countOfChars[string[i]] = 1;
    }
  }

  for (key in countOfChars) {
    console.log(`${key}: ${countOfChars[key]} \n`);
  }

  console.log(countOfChars);
}
