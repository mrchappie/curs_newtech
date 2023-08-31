const keys = document.querySelectorAll('.key');
const starGame = document.getElementById('start');
const timeLeft = document.getElementById('time__left');

const arr = ['w', 'a', 's', 'd'];
let userLost = false;
let nextKey = '';
let time = 5;
let interval;

const counter = () => {
  clearInterval(interval);
  time = 5;
  timeLeft.textContent = time;

  interval = setInterval(() => {
    if (time > 0) {
      time--;
      timeLeft.textContent = time;
    } else {
      clearInterval(interval);
      alert('You lose');
      userLost = true;
    }
  }, 1000);
};

const getRandomLetter = () => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  document.getElementById('press__random__key').textContent = arr[randomNumber];
  counter();
  return arr[randomNumber];
};

const changeButtonColor = (key, keyId, status) => {
  //   console.log('KEY: ', key, 'KEY ID: ', keyId.id, 'STATUS: ', status);
  if (key === keyId.id) {
    keyId.style.backgroundColor = status ? 'green' : 'red';
    const spanCount = document.getElementById(`${keyId.id}__value`);
    spanCount.textContent = Number(spanCount.textContent) + 1;
    document.getElementById('pressed__key').textContent = keyId.id;
  }
};

const removeButtonColor = (key, keyId) => {
  if (key === keyId.id) {
    keyId.style.backgroundColor = 'transparent';
  }
};

document.addEventListener('keydown', (e) => {
  if (userLost) return;

  let userWon = false;

  keys.forEach((key) => {
    if (e.key === nextKey) {
      changeButtonColor(e.key, key, true);
      userWon = true;
    } else {
      changeButtonColor(e.key, key, false);
    }
  });

  nextKey = getRandomLetter();

  if (!userWon) {
    userLost = true;
    return alert('You lose!');
  }
});

document.addEventListener('keyup', (e) => {
  keys.forEach((key) => {
    removeButtonColor(e.key, key);
  });
});

starGame.addEventListener('click', () => {
  if (userLost) {
    location.reload();
  }
  nextKey = getRandomLetter();
});
