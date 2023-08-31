import userTasks from './script/state.js';

const taskTitle = document.getElementById('todo__title');
const taskDescription = document.getElementById('todo__description');
const searchQuery = document.getElementById('todo__search__item');

const addTaskBtn = document.getElementById('add__task__btn');
const searchTaskBtn = document.getElementById('todo__search__btn');
const clearSearchBtn = document.getElementById('todo__clear__btn');

const todoListEl = document.getElementById('to__do__tasks__list');
const doneListEl = document.getElementById('done__items__list');

function handleLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(userTasks));
}

function generateRandomId(min = 10000000, max = 20000000) {
  const id = Math.floor(Math.random() * (max - min) + min);
  return id;
}

function insertTaskInDOM(task, parent) {
  // task param is an object
  // create list element
  const listEl = document.createElement('li');
  listEl.classList.add('to__do__task');
  listEl.id = task.id;

  //create done button element
  const doneBtnEL = document.createElement('div');
  doneBtnEL.classList.add('done__btn');

  // create checkbox element
  const inputEl = document.createElement('input');
  inputEl.type = 'checkbox';
  inputEl.name = 'done__checkbox';
  inputEl.id = 'done__checkbox';
  if (task.done) {
    inputEl.checked = true;
  }
  doneBtnEL.append(inputEl);

  // add event listener on checkbox to mark when a task it's done
  inputEl.addEventListener('change', (e) => {
    if (inputEl.checked) {
      const aux = userTasks.todo.filter((object) => object.id == listEl.id);
      aux[0].done = true;
      userTasks.done.push(...aux);

      const parent = e.target.parentElement.parentElement.parentElement.id;
      removeTask(listEl.id, parent);
      listEl.remove();
      insertTaskInDOM(aux[0], doneListEl);
    } else {
      const aux = userTasks.done.filter((object) => object.id == listEl.id);
      aux[0].done = false;
      userTasks.todo.push(...aux);

      const parent = e.target.parentElement.parentElement.parentElement.id;
      removeTask(listEl.id, parent);
      listEl.remove();
      insertTaskInDOM(aux[0], todoListEl);
    }
  });

  // create a div that will contain task title and description
  const taskEl = document.createElement('div');
  taskEl.classList.add('task__content');

  // task title
  const titleEl = document.createElement('h2');
  titleEl.textContent = task.title;

  //tsk description
  const descriptionEl = document.createElement('p');
  descriptionEl.textContent = task.description;
  taskEl.append(titleEl);
  taskEl.append(descriptionEl);

  // create the delete "button" and the inside icon
  const deleteBtnEl = document.createElement('div');
  deleteBtnEl.classList.add('delete__btn');
  const iconEl = document.createElement('img');
  iconEl.src = './assets/bin.svg';
  iconEl.alt = 'bin svg icon';
  deleteBtnEl.append(iconEl);

  // add event listener on delete "button"
  deleteBtnEl.addEventListener('click', (e) => {
    const parent = e.target.parentElement.parentElement.parentElement.id;
    removeTask(listEl.id, parent);
    listEl.remove();
  });

  // append all children to the parent ( list element )
  listEl.append(doneBtnEL);
  listEl.append(taskEl);
  listEl.append(deleteBtnEl);

  // append the list element to unordered list element
  parent.append(listEl);
}

function insertTaskInDOMOnLoad() {
  const obj = JSON.parse(localStorage.getItem('todos'));

  todoListEl.innerHTML = '';
  doneListEl.innerHTML = '';
  userTasks.done.length = 0;
  userTasks.todo.length = 0;

  obj.todo.forEach((object) => {
    insertTaskInDOM(object, todoListEl);
    userTasks.todo.push(object);
  });

  obj.done.forEach((object) => {
    insertTaskInDOM(object, doneListEl);
    userTasks.done.push(object);
  });
}

window.addEventListener('load', () => {
  insertTaskInDOMOnLoad();
});

function addTask(title, description) {
  const auxObj = {};
  auxObj.id = generateRandomId();
  auxObj.done = false;
  auxObj.title = title;
  auxObj.description = description;

  userTasks.todo.push(auxObj);

  insertTaskInDOM(auxObj, todoListEl);
  handleLocalStorage();
}

function removeTask(id, elemParent) {
  const newTasks =
    elemParent === 'to__do__tasks__list'
      ? userTasks.todo.filter((object) => object.id != id)
      : userTasks.done.filter((object) => object.id != id);

  elemParent === 'to__do__tasks__list'
    ? (userTasks.todo = newTasks)
    : (userTasks.done = newTasks);

  handleLocalStorage();
}

addTaskBtn.addEventListener('click', () => {
  addTask(taskTitle.value, taskDescription.value);
  taskTitle.value = '';
  taskDescription.value = '';
});

searchTaskBtn.addEventListener('click', () => {
  todoListEl.innerHTML = '';
  doneListEl.innerHTML = '';
  const query = searchQuery.value.toLowerCase();

  const todoTasks = [
    ...userTasks.todo.filter(
      (object) =>
        object.title.toLowerCase().includes(query) ||
        object.description.toLowerCase().includes(query)
    ),
  ];

  todoTasks.forEach((object) => {
    insertTaskInDOM(object, todoListEl);
  });

  const doneTasks = [
    ...userTasks.done.filter(
      (object) =>
        object.title.toLowerCase().includes(query) ||
        object.description.toLowerCase().includes(query)
    ),
  ];

  doneTasks.forEach((object) => {
    insertTaskInDOM(object, doneListEl);
  });
});

clearSearchBtn.addEventListener('click', () => {
  searchQuery.value = '';

  insertTaskInDOMOnLoad();
});
