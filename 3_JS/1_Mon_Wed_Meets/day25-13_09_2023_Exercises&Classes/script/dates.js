const date = new Date();
console.log(date);

date.setFullYear(1995);
console.log(date);

date.setFullYear(1895);
console.log(date);
console.log(date.getTime());

date.setMonth(15);
console.log(date);

date.setDate(60);
console.log(date);

const diff = new Date(Date.now() - date.getTime());
console.log(diff);

// timeout and interval
setTimeout(() => {
  console.log('Timeout done');
}, 500);

// setInterval(() => {
//   console.log('Timeout done');
// }, 1000);

function f() {
  setTimeout(() => {
    console.log('First');
  });

  console.log('Second');
}
