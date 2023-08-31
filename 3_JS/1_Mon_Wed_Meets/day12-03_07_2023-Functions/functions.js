//
//
//
//

function decl(a, b, c) {
  console.log('decl call with values:');
  console.log('a = ', a);
  console.log('b = ', b);
  console.log('c = ', c);

  return '' + a + b + c;
}

console.log('Returned:', decl(1, 2));
console.log('Returned:', decl('a', 'b', 'c', 'd'));
