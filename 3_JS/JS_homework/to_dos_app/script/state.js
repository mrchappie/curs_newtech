/* This code is retrieving the value stored in the 'todos' key of the localStorage object and parsing
it as a JSON object using `JSON.parse()`. If there is no value stored in the 'todos' key or if the
value cannot be parsed as a JSON object, it will assign an empty object with properties `todo` and
`done` set to empty arrays as the default value. Finally, it exports the `userTasks` object as the
default value for the module. */

const userTasks = JSON.parse(localStorage.getItem('todos')) || {
  todo: [],
  done: [],
};

export default userTasks;
