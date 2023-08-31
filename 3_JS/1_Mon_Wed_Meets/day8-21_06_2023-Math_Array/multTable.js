function multTable(num) {
  let mult = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      //  mult = mult +  `${i} * ${j} = ${i * j}`;
      console.table(`${i} * ${j} = ${i * j}`);
    }
  }

  return mult;
}

multTable(10);
