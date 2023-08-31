// DIY 1
// const computer = {
//   price: 15,
//   color: 'purple',
//   memory: 'empty',
// };

// console.log(computer);

// const computer2 = new Object();

// computer2.price = 500;
// computer2.color = 'red';
// computer2.memory = 'empty';

// console.log(computer2);

// DIY 2 FAMILy TREE

function Person(name, mother, father) {
  // prettier-ignore
  this.name = name,
  this.mother = mother,
  this.father = father;
}

// grandparents
const motherGrandma = new Person('motherGrandma');
const motherGranpa = new Person('motherGranpa');
const fatherGrandma = new Person('fatherGrandma');
const fatherGranpa = new Person('fatherGranpa');

// parents
const mother = new Person('Mother', motherGrandma, motherGranpa);
const father = new Person('Father', fatherGrandma, fatherGranpa);

// me
const me = new Person('Me', mother, father);

console.log(me);
