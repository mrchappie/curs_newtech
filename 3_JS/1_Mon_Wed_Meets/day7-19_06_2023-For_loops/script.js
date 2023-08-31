// Scrieti un program care:
// 1) sa ceara un numar (n) de la utilizator
// 2) sa ceara de la utilizator n numere (n = numarul de valori ce vor fi introduse)
// 3) sa afiseze suma numerelor introduse
// 4) sa afiseze cate numere pare au fost introduse
// 5) sa se afiseze media numerelor
// 6) sa se afiseze min or max number from user

const getFirstValue = prompt('Choose a number between 0 and 10:');

function sum(n) {
  let sum = 0;
  let even = 0;
  let max = Number.NEGATIVE_INFINITY;
  const average = sum / n;

  for (let i = 0; i < n; i++) {
    const newNum = Number(prompt(`Insert ${i + 1} number:`));

    sum = sum + newNum;

    if (newNum % 2 === 0) {
      even++;
    }

    if (newNum > max) {
      max = newNum;
    }
  }

  return { sum, even, average, max };
}

console.log(sum(getFirstValue));
