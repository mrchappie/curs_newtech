const personsList = [
  {
    firstName: 'Emma',
    lastName: 'Johnson',
    middleName: 'Grace',
    age: 28,
  },
  {
    firstName: 'Liam',
    lastName: 'Smith',
    age: 35,
  },
  {
    firstName: 'Olivia',
    lastName: 'Williams',
    middleName: 'Sophia',
    age: 22,
  },
  {
    firstName: 'Noah',
    lastName: 'Brown',
    middleName: 'Alexander',
    age: 41,
  },
  {
    firstName: 'Ava',
    lastName: 'Martinez',
    middleName: 'Isabel',
    age: 30,
  },
  {
    firstName: 'William',
    lastName: 'Davis',
    age: 49,
  },
  {
    firstName: 'Sophia',
    lastName: 'Anderson',
    middleName: 'Elizabeth',
    age: 27,
  },
  {
    firstName: 'Isabella',
    lastName: 'Wilson',
    age: 19,
  },
  {
    firstName: 'James',
    lastName: 'Taylor',
    middleName: 'Robert',
    age: 33,
  },
  {
    firstName: 'Oliver',
    lastName: 'Jones',
    middleName: 'William',
    age: 24,
  },
];

// 1) Scrieti o functie constructor numita Person care defineste
//    obiecte cu proprietatile firstName, middleName, lastName si age
// 2) Scrieti o functie numita getFullName care sa intoarca numele
//    complet al unei persoane, folosind un parametru destructurat

function Person(firstName, lastName, age, middleName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.middleName = middleName;
}

const john = new Person('John', 'Watson', 35),
  mary = new Person('Mary', 'Watson', 28, 'Jane');

personsList.forEach((person) => {
  console.log(getFullName(person));
});

function getFullName({ firstName, lastName, age, middleName }) {
  // return `My name is ${firstName}${
  //   middleName ? '-' + middleName : ''
  // } ${lastName} and I'm ${age} years old!`;

  // prettier-ignore
  return `${firstName}${middleName ? '-' + middleName : ''} ${lastName}, ${age}`;
}

console.log(getFullName(john)); // "John Watson"
console.log(getFullName(mary)); // "Mary-Jane Watson"
