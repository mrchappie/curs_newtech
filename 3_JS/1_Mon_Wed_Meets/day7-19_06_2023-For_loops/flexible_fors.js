for (let i = 0; i < 3; i++) {
  console.log(i);
}

{
  let i = 0;
  for (; i < 3; i++) console.log(i);
}

{
  for (let i = 0; ; i++) {
    if (i >= 3) break;
    console.log(i);
  }
}

{
  for (let i = 0; i < 3; ) {
    console.log(i);
    i++;
  }
}

{
  let i = 0;
  for (;;) {
    if (i >= 3) break;
    console.log(i);
    i++;
  }
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

let num = 5467;
let counter = 0;
console.log(num.toString().length);

while (num > 0) {
  num = parseInt(num / 10);
  counter++;
}

console.log(counter);
