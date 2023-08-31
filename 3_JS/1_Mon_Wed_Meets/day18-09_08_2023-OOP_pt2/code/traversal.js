console.log(document.documentElement);
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);

console.log(document.body.parentNode);
console.log(document.body.parentElement);

console.log(document.querySelectorAll('p')[1]);
console.log(document.querySelectorAll('p')[1].childNodes);
console.log(document.querySelectorAll('p')[1].children);

console.log('SIBLINGS');
console.log(document.querySelector('b').previousSibling);
console.log(document.querySelector('b').previousElementSibling);
console.log(document.querySelector('u').previousSibling);
console.log(document.querySelector('u').previousElementSibling);

console.log('CHILDREN');
console.log(document.querySelector('p').firstChild);
console.log(document.querySelector('p').firstElementChild);
