console.log('1 / 2 =', 1 + 1);
console.log('3 - 2 =', 3 - 2);
console.log('10 / 4 =', 10 / 4);
console.log('10 % 4 =', 10 % 4);

console.log('SHORT FORMS');
let n = 0;
// n = n + 5;
n += 5;
console.log(n);
n -= 2;
console.log(n);
n /= 2;
console.log(n);
// n += -1; n = n - 1
n--;
console.log(n);
// n += 1; n = n + 1
n++;
console.log(n);

console.log('MERE & PRUNE');
let mere = 1,
  prune = 1;
console.log(mere++, ++prune);
console.log(mere, prune);

// LOGICAL OPERATORS
console.log('LOGICAL OPERATORS');
console.log('not true is', !true);
console.log('not false is', !false);
console.log('LOGICAL AND');
console.log('true and false', true && false);
console.log('LOGICAL OR');
console.log('true or false', true || false);

console.log('COMPARATION OPERATORS');
console.log('1 is greater than 0', 1 > 0);
console.log('1 is lower than 0', 1 < 0);
console.log('1 is greater than 0', 2 > 0);
console.log('1 is lower than 2', 2 < 1);
console.log('1 is greater or equal 0', 1 >= 0);
console.log('1 is lower or equal 2', 1 <= 2);

console.log('EQUALITY OPERATORS');
console.log('1 === 1 is:', 1 === 1);
console.log('1 == 1 is:', 1 == 1);
console.log('1 === 0 is:', 1 === 0);
console.log('1 == 0 is:', 1 == 0);
console.log(`1 === '1' is:`, 1 === '1');
console.log(`1 == '1' is:`, 1 == '1');
console.log('[] === false is:', [] === false);
console.log('[] == false is:', [] == false);
console.log('null === false is:', null === false);
console.log('null == false is:', null == false);
console.log('undefined === false is:', undefined === false);
console.log('undefined == false is:', undefined == false);

let a = 1,
  b = 1;
console.log(typeof a == 'number' && typeof a == typeof b && a == b, a === b);

let c = 3,
  d = '3';
console.log(typeof d == 'string' && typeof c == typeof d && c == d, c === d);
