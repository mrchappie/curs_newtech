// Implementati urmatoare functie care calculeaza
// cantitatea totala comandata in fiecare luna:

const orders = [
  {
    date: new Date('1/7/2020'),
    quantity: 1,
  },
  {
    date: new Date('2/7/2020'),
    quantity: 2,
  },
  {
    date: new Date('2/3/2020'),
    quantity: 3,
  },
  {
    date: new Date('1/3/2020'),
    quantity: 4,
  },
  {
    date: new Date('1/7/2021'),
    quantity: 5,
  },
  {
    date: new Date('1/2/2021'),
    quantity: 6,
  },
  {
    date: new Date('1/10/2020'),
    quantity: 7,
  },
];

function getQuantities(orders) {}

console.log(getQuantities(orders));
// Map {
//  January 2020 => 12
//  February 2020 => 5
//  January 2021 => 11
// }
