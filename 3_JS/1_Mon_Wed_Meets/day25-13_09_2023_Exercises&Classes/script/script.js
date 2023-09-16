const products = [
  {
    id: 0,
    name: 'Faina',
    price: 4.99,
    cantitate: 1,
  },
  {
    id: 1,
    name: 'Pesmet',
    price: 7.49,
    cantitate: 1,
  },
  {
    id: 2,
    name: 'Ton conserva',
    price: 17.49,
    cantitate: 0.25,
  },
  {
    id: 3,
    name: 'Ulei',
    price: 9.49,
    cantitate: 1,
  },
  // {
  //   id: 4,
  //   name: "Otet",
  //   price: 5.49,
  //   cantitate: 0.5,
  // },
];

// key = id-ul produsului => value = procentul cu care este redus
const discounts = new Map([
  [0, 20],
  [3, 15],
  [4, 30],
  [5, 10],
  [9, 5],
]);

/**
 * Intoarce toate reducerile disponibile si cea mai buna reducere
 *
 * @returns {
 *  offers,
 *  bestOffer
 * }
 */
function getOffers(products, discounts) {
  // 1) Verificam daca avem produse cu reduceri
  // 2) Gasim toate produsele care au reduceri, cu pretul actualizat
  // 3) Cautam produsul cu cea mai mare reducere (ca procent).

  const productsAfterDiscount = [];

  products.forEach((product) => {
    const discount = discounts.get(product.id);
    if (discount) {
      product.price = product.price - product.price * (discount / 100);
      productsAfterDiscount.push(product);
    } else {
      //   productsAfterDiscount.push(product);
    }
  });

  const bestOffer = Math.min(
    ...productsAfterDiscount.map((product) => product.price)
  );

  return [productsAfterDiscount, bestOffer];
}

console.log(getOffers(products, discounts));
