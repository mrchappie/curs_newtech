type Person = {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
  greeting?: () => void;
};

let john: Person;

john = {
  firstName: 'John',
  lastName: 'Smith',
  age: 32,
  greeting() {
    return `Salutations from ${this.firstName}!`;
  },
};

console.log(john.greeting?.());

const object = {
  firstName: '',
  lastName: '',
  age: 24,
  bday: '24-12-1998',
};

// john = object;

let ball: {
  material: string;
  color: string;
  weight: number;
  [key: string]: any;
};

ball = {
  material: 'rubber',
  color: 'red',
  weight: 50,
  jumps: 5,
};

function getFullName(person: {
  firstName: string;
  middleName?: string;
  lastName: string;
}) {
  return person.firstName + ' ' + person.middleName + ' ' + person.lastName;
}

// console.log(getFullName(john));
// console.log(getFullName(object));

function isPerson(obj: any): obj is Person {
  return (
    obj.firstName !== undefined &&
    typeof obj.firstName === 'string' &&
    obj.lastName !== undefined &&
    typeof obj.lastName === 'string' &&
    obj.age !== undefined &&
    typeof obj.age === 'number'
  );
}

function getName(personOrName: Person | string) {
  if (isPerson(personOrName)) {
    return personOrName.firstName;
  }
  return personOrName;
}

interface PersonInterface {
  firstName: string;
  middleName?: string;
  lastName: string;
  age: number;
  greeting?: () => void;
}

let jimmy: Person = {
  firstName: 'Jimmy',
  lastName: 'Smith',
  age: 32,
  greeting() {
    return `Salutations from ${this.firstName}!`;
  },
};

let mary: PersonInterface = { firstName: 'Mary', lastName: 'Johnson', age: 49 };

jimmy = mary;
// mary = jimmy;

//! DE EVITAT
// type myAny = {};
// interface IAny {}

interface Point {
  xCoord: number;
}

// let point: Point = { xCoord: 1};
let point: Point = { xCoord: 1, yCoord: 0 };

interface Point {
  yCoord: number;
}
