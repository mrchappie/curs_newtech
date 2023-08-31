const getMax = (n1, n2, n3) =>
  n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;

function maxBetween3Numbers(n1, n2, n3) {
  const num1 = prompt('Give me a number:');
  const num2 = prompt('Give me another number:');
  const num3 = prompt('Give me a final number:');

  //   const maxNumber = Math.max(num1, num2, num3);
  document.getElementById('max__number').textContent = `Max number is: ${getMax(
    num1,
    num2,
    num3
  )}`;
}
