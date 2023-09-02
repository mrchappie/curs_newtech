// Documentation wroted by mintlify.document
// Mintlify Doc Writer for Python, JavaScript, TypeScript, C++, PHP, Java, C#, Ruby & more

import userTasks from './script/state.js';

const taskTitle = document.getElementById('todo__title');
const taskDescription = document.getElementById('todo__description');
const searchQuery = document.getElementById('todo__search__item');

const addTaskBtn = document.getElementById('add__task__btn');
const searchTaskBtn = document.getElementById('todo__search__btn');
const clearSearchBtn = document.getElementById('todo__clear__btn');

const todoListEl = document.getElementById('to__do__tasks__list');
const doneListEl = document.getElementById('done__items__list');

/**
 * The function handleLocalStorage() saves the userTasks array to the localStorage as a JSON string.
 */
function handleLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(userTasks));
}

/**
 * The function generates a random ID within a specified range.
 * @param [min=10000000] - The minimum value that the random ID can be. By default, it is set to
 * 10,000,000.
 * @param [max=20000000] - The `max` parameter is the maximum value that the generated random ID can
 * have. By default, it is set to 20,000,000.
 * @returns a randomly generated ID within the specified range.
 */
function generateRandomId(min = 10000000, max = 20000000) {
  const id = Math.floor(Math.random() * (max - min) + min);
  return id;
}

/**
 * The function `insertTaskInDOM` creates and inserts a task element into the DOM, including a
 * checkbox, task title, description, and delete button.
 * @param task - The `task` parameter is an object that represents a task. It should have the following
 * properties:
 * @param parent - The `parent` parameter is the DOM element where the task will be inserted. It should
 * be a reference to the parent element, such as `document.getElementById('parentElementId')`.
 */
function insertTaskInDOM(task, parent) {
  /* The code is creating a new list element (`<li>`) and assigning it a class of `'to__do__task'` and an
id equal to the `id` property of the `task` object. This list element will be used to represent a
task in the DOM. */
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

  // add event listener on checkbox to mark / unmark the task as beeing done or not
  /* The `inputEl.addEventListener('change', (e) => { ... })` code adds an event listener to the
  checkbox element (`inputEl`). When the checkbox is changed (checked or unchecked), the callback
  function is executed. */
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

  // create a h2 element for task title
  const titleEl = document.createElement('h2');
  titleEl.textContent = task.title;

  // create a p element for task description
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

/**
 * The function `insertTaskInDOMOnLoad` retrieves tasks from local storage, clears the task lists, and
 * inserts the tasks into the appropriate DOM elements.
 */
function insertTaskInDOMOnLoad() {
  todoListEl.innerHTML = '';
  doneListEl.innerHTML = '';
  // userTasks.done.length = 0;
  // userTasks.todo.length = 0;

  userTasks.todo.forEach((object) => {
    insertTaskInDOM(object, todoListEl);
    // userTasks.todo.push(object);
  });

  userTasks.done.forEach((object) => {
    insertTaskInDOM(object, doneListEl);
    // userTasks.done.push(object);
  });
}

/* The `window.addEventListener('load', () => { insertTaskInDOMOnLoad(); });` code is adding an event
listener to the `window` object for the `load` event. When the `load` event is triggered, it calls
the `insertTaskInDOMOnLoad()` function. This function is responsible for retrieving tasks from local
storage, clearing the task lists, and inserting the tasks into the appropriate DOM elements. By
adding this event listener, the `insertTaskInDOMOnLoad()` function will be executed once all the
resources on the page have finished loading. */
window.addEventListener('load', () => {
  insertTaskInDOMOnLoad();
});

/**
 * The `addTask` function adds a new task with a title and description to the user's todo list.
 * @param title - The title parameter is a string that represents the title of the task.
 * @param description - The `description` parameter is a string that represents the description of the
 * task. It provides additional details or information about the task.
 */
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

/**
 * The function removes a task from either the "todo" or "done" array in the "userTasks" object based
 * on the provided id and the parent element.
 * @param id - The id parameter represents the unique identifier of the task that needs to be removed.
 * @param elemParent - The `elemParent` parameter is a string that represents the parent element of the
 * task that needs to be removed. It can have two possible values: "to__do__tasks__list" or
 * "done__tasks__list".
 */
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

/* The code `addTaskBtn.addEventListener('click', () => { addTask(taskTitle.value,
taskDescription.value); taskTitle.value = ''; taskDescription.value = ''; });` is adding an event
listener to the `addTaskBtn` element. When the button is clicked, the callback function is executed. */
addTaskBtn.addEventListener('click', () => {
  addTask(taskTitle.value, taskDescription.value);
  taskTitle.value = '';
  taskDescription.value = '';
});

/* The `searchTaskBtn.addEventListener('click', () => { ... })` code adds an event listener to the
`searchTaskBtn` element. When the button is clicked, the callback function is executed. */
searchTaskBtn.addEventListener('click', () => {
  /* This code is performing a search functionality based on the user's input query. */
  const query = searchQuery.value.toLowerCase();

  todoListEl.innerHTML = '';
  doneListEl.innerHTML = '';
  /* The code is creating a new array called `todoTasks` by filtering the `userTasks.todo` array. It
  filters the array based on whether the `title` or `description` of each task includes the `query`
  string (after converting both the `title` and `description` to lowercase). The spread operator
  (`...`) is used to create a new array with the filtered tasks. */
  const todoTasks = [
    ...userTasks.todo.filter(
      (object) =>
        object.title.toLowerCase().includes(query) ||
        object.description.toLowerCase().includes(query)
    ),
  ];
  /* The code `todoTasks.forEach((object) => { insertTaskInDOM(object, todoListEl); });` is iterating
  over each task object in the `todoTasks` array and calling the `insertTaskInDOM` function for each
  task. */
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

/* The code `clearSearchBtn.addEventListener('click', () => { searchQuery.value = '';
insertTaskInDOMOnLoad(); });` adds an event listener to the `clearSearchBtn` element. When the
button is clicked, the callback function is executed. */
clearSearchBtn.addEventListener('click', () => {
  searchQuery.value = '';

  insertTaskInDOMOnLoad();
});
