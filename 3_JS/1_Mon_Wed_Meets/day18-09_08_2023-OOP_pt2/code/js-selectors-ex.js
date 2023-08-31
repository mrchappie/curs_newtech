// CERINTE
//
// 1) Navigation
//  1.1) Setati background-ul elementului nav la "black"
//  1.2) Setati culoarea textului elementelor de navigatie la "white"
//  1.3) Setati un padding de 1em pe fiecare element de navigatie
//
// 2) Titlu
//  2.1) Setati background-ul elementului h1 la "black"
//  2.2) Centrati titlul orizontal
//
// 3) Articole
//  3.1) Setati pe toate articolele un chenar de 5px solid blue
//  3.2) Setati pe al doilea articol clasa "important"
//  3.3) BONUS: Setati pe toate elementele din al doilea articol clasa "important"
//
// 4) Formular
//  4.1) Faceti campurile email si feedback obligatorii
//  4.2) Dezactivati butonul de submit
//  4.3) Modificati tipul campului email la tipul email
//  4.4) Setati un outline de 3px dotted green pe campul email
//  4.5) Setati placeholders "Email..." si "Feedback..." pe cele doua campuri

// 1. Navigation
const nav = document.querySelector('nav');
nav.style.backgroundColor = 'black';
nav.style.color = 'white';
const listEl = document.querySelectorAll('ul > li');
listEl.forEach((list) => (list.style.padding = '1em'));

// 2. Titlu
const heading = document.getElementsByTagName('h1')[0].style;
heading.backgroundColor = 'black';
heading.textAlign = 'center';
heading.color = 'white';

// 3. Articole
const articles = Array.from(document.getElementsByTagName('article'));
articles.forEach((article) => {
  article.style.borderColor = 'blue';
  article.style.borderWidth = '5px';
  article.style.borderStyle = 'solid';
});

articles[1].classList.add('important');
Array.from(articles[1].children).forEach((child) => {
  child.classList.add('important');
});

// 4) Formular
const email = document.getElementsByName('email');
email[0].type = 'email';
email[0].required = true;
email[0].style.outlineColor = 'green';
email[0].style.outlineWidth = '3px';
email[0].style.outlineStyle = 'dotted';
email[0].placeholder = 'Email...';

const feedback = document.getElementsByName('feedback');
feedback[0].required = true;
feedback[0].placeholder = 'Email...';

document.getElementById('reset').disabled = true;

// 5. Google
document.getElementsByTagName('form')[0].action = 'https://www.google.com/';
