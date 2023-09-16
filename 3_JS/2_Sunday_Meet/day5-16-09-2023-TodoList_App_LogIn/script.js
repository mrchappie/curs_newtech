const inputTask = document.getElementById('add__task');
const addTaskBtn = document.getElementById('add__btn');
const clearBtn = document.getElementById('clear__btn');
const listElements = document.getElementById('list__elements');
const taskCounter = document.getElementById('task__count');

const taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function updateCounter() {
  taskCounter.textContent = taskList.filter(
    (task) => task.isDone === false
  ).length;
}

window.addEventListener('load', () => {
  updateCounter();

  for (const task of taskList) {
    createListElement(task);
  }
});

function addToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(taskList));
  updateCounter();
}

function createListElement(task) {
  const li = document.createElement('li');
  li.textContent = task.taskName;
  li.id = task.taskId;

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkBox';

  if (task.isDone) {
    checkBox.checked = true;
    li.style.textDecoration = 'line-through';
  }

  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      li.style.textDecoration = 'line-through';
      taskList.map((task) => {
        if (task.taskId === li.id) {
          task.isDone = true;
        }
        return task;
      });
    } else {
      li.style.textDecoration = 'none';

      taskList.map((task) => {
        if (task.taskId === li.id) {
          task.isDone = false;
        }
        return task;
      });
    }

    addToLocalStorage();
  });

  li.append(checkBox);

  listElements.append(li);
}

addTaskBtn.addEventListener('click', () => {
  if (!inputTask.value) return;

  const randomId = function (length = 20) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };

  const task = {
    taskName: inputTask.value,
    isDone: false,
    taskId: randomId(),
  };
  taskList.push(task);

  createListElement(task);
  addToLocalStorage(inputTask.value);
  inputTask.value = '';
});

listElements.addEventListener('click', (e) => {
  e.target.setAttribute('contentEditable', 'true');
  console.log(e.target);
});
