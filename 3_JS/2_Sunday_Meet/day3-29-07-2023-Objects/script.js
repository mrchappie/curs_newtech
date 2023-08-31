const person = {
  name: 'Alex',
  job: 'Dev',
  age: '24',
  getName: function () {
    return this.name;
  },
  get getAge() {
    return () => this.age;
  },
};

const personList = [
  {
    name: 'Alex',
    job: 'Dev',
    age: '24',
  },
  {
    name: 'Maria',
    job: 'Chef',
    age: '32',
  },
  {
    name: 'John',
    job: 'Constructions',
    age: '42',
  },
];

console.log(person.getName());
console.log(person.getAge());

const copyName = person.getName;
console.log(copyName());
const copyAge = person.getAge;
console.log(copyAge());
