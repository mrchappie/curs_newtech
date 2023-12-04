const queryInput = document.getElementById('query');
const itemsList = document.getElementById('itemsList');

const items = [
  'Alex',
  'Ionel',
  'Ion',
  'Mircea',
  'Maria',
  'Andreea',
  'Lucia',
  'Marcel',
  'Vasile',
  'Nicu',
];

function renderItems(items) {
  itemsList.innerHTML = '';

  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';

    deleteButton.addEventListener('click', () => {
      li.remove();

      const index = items.indexOf(item);
      items.splice(index, 1);

      renderItems(items);
    });

    li.append(deleteButton);

    itemsList.append(li);
  });
}

window.addEventListener('load', () => {
  renderItems(items);
});

queryInput.addEventListener('input', () => {
  const queryText = queryInput.value;

  const filteredItems = items.filter((item) => {
    return item.toLowerCase().includes(queryText.toLowerCase());
  });

  renderItems(filteredItems);
});
