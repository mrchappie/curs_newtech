/*
 *  HINTS: (pentru punctul 2)
 *  Trebuie sa stocam ultima valoare introdusa de utilizator.
 *  Este suficienta O SINGURA VARIABILA?
 *  UNDE trebuie sa definim aceasta/aceste variabile?
 */

/*  1) Definiti functia toNumber care primeste ca parametru
 *  un numar de o cifra sau un string ce contine denumirea unei cifre
 *  Ex: toNumber(1)     => 1
 *      toNumber("doi") => 2
 *      toNumber("3")   => 3
 *      toNumber(true)  => Error
 */

/*
 * 2) Implementati o pagina web cu un input si un buton
 * Utilizatorul va trebui sa numere de la 1 la 3 in ordine
 * in cifre sau string-uri
 *
 * Utilizatorul va introduce o valoare in input si va da click
 * pe buton pentru verificare. Butonul verifica input-ul
 * apeland functia "toNumber" si valideaza ca valoarea
 * este cea asteptata.
 *
 * BONUS: Adaugati un buton de RESET care sa reporneasca
 *  numaratoarea de la 0
 *
 * Ex:  SCENARIU POZITIV
 *      input: 1     => Corect
 *      input: "doi" => Corect
 *      input: 3     => Corect
 *
 *      SCENARIU NEGATIV
 *      input: 1      => Corect
 *      input: "trei" => Gresit
 *      input: 2      => Corect
 *      input: "unu"  => Gresit
 *      input: "trei" => Corect
 */
const input = document.getElementById('input');
const button = document.getElementById('submit');
const counter = document.getElementById('counter');

let lastUserInput = '0';
const correctSteps = ['1', 'doi', '3', '4', 'cinci'];

const toNumber = (number) => {
  // if (lastUserInput === '0' && number === '1') {
  //   lastUserInput = number;
  //   counter.innerText = lastUserInput;
  //   alert(`Corect! Ai introdus numărul "${number}".`);
  // } else if (lastUserInput === '1' && number === 'doi') {
  //   lastUserInput = number;
  //   counter.innerText = lastUserInput;
  //   alert(`Corect! Ai introdus numărul "${number}".`);
  // } else if (lastUserInput === 'doi' && number === '3') {
  //   lastUserInput = number;
  //   counter.innerText = lastUserInput;
  //   alert(`Corect! Ai introdus numărul "${number}".`);
  // } else {
  //   alert(`Greșit!`);
  // }
  let correct = false;

  for (let i = 0; i < correctSteps.length; i++) {
    const step = correctSteps[i];

    if (step === number) {
      lastUserInput = number;
      counter.innerText = lastUserInput;
      alert(`Corect, ai introdus ${number}`);
      correct = true;
      break;
    }
  }

  if (!correct) {
    alert(`Greșit! Mai încearcă..`);
  }
};

button.addEventListener('click', () => {
  toNumber(input.value);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'r') {
    lastUserInput = '0';
    counter.innerText = lastUserInput;
  }
});
