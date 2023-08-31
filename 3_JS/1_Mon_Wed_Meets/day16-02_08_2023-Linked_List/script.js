// Scrieti o functie constructor BankAccount care primeste ca parametru un numar (suma de bani din cont) si are urmatoarele proprietati:
// - balance: suma de bani disponibila in cont
// - deposit: Functie care adauga valoarea numerica primita ca parametru la balance
// - withdraw: Functie care scade valoarea numerica primita ca parametru din balance
// - transfer: Functie care transfera o suma de bani dintr-un cont in altul

function BankAccount(credit) {
  if (!isNaN(credit) && credit > 0) {
    this.balance = credit;
    this.deposit = function (value) {
      this.balance += value;
    };
    this.withdraw = function (value) {
      this.balance -= value;
    };
    this.transfer = function (value, recipient) {
      this.withdraw(value);
      recipient.deposit(value);
    };
  } else {
    console.log('Input is invalid: ' + credit);
  }
}

// create Person1 account
const person1 = new BankAccount(1000);
console.log(person1.balance);
//deposit
person1.deposit(234);
console.log(person1.balance);
//withdraw
person1.withdraw(1);
console.log(person1.balance);

// create Person2 account
const person2 = new BankAccount(2000);
console.log(person2.balance);
//deposit
person2.deposit(300);
console.log(person2.balance);
//withdraw
person2.withdraw(200);
console.log(person2.balance);

//transfer from Person1 to Person2
person1.transfer(100, person2);
console.log(person1.balance);

//transfer from Person2 to Person1
person2.transfer(200, person1);
console.log(person2.balance);

const person3 = new BankAccount(-1000);
const person4 = new BankAccount('asasasas');
