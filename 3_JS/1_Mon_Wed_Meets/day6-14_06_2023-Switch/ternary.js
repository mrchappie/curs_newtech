function ternaryOperator(a, b) {
  //   if (a === b) console.log('Equal');
  //   else console.log('Different');

  //   a === b ? console.log('Eq') : console.log('Diff');

  //   console.log('===== normal ');
  //   if (a > 2) {
  //     if (a === 4) console.log('FOUR');
  //     else console.log('A is bigish');
  //   } else if (b < 3) console.log('B is less than 3');
  //   else console.log('B is big');

  console.log('===== ternary ');
  console.log(
    a > b
      ? a === 4
        ? 'FOUR'
        : 'A is bigish'
      : b < 3
      ? 'B is less than 3'
      : 'B is big'
  );
}

// ternaryOperator(1, 1);
// ternaryOperator(1, '1');
// ternaryOperator(1, 'abc');

ternaryOperator(4, 5);
ternaryOperator(3, 5);
ternaryOperator(1, 2);
ternaryOperator(1, 3);
