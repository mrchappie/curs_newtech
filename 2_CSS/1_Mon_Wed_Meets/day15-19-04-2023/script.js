const selectOption = () => {
  console.log('clicked');
  const dropDown = document.getElementById('options');
  const number = document.getElementById('number');
  const option = (dropDown.selectedIndex = number.value);

  const form = document.getElementById('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stops the form from submitting

    // your code here
    form.action = `${option}${number.value}`;
    console.log(`${option}${number.value}`);
  });
};
