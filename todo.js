const chalk = require('chalk');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ todos: [] }).write();

async function addTodo({ title, status, group }) {
   const todoId = await db
      .get('todos')
      .push({
         id: Date.now().toString(),
         title: title,
         status: status,
         date: new Date(),
         group: group
      })
      .write();

   return todoId;
}

async function removeTodo(id_todo) {
   const removeTodo = await db
      .get('todos')
      .remove({ id: id_todo.toString() })
      .write();

   return removeTodo;
}

function removeAll() {
   const removeTodo = db
      .get('todos')
      .remove()
      .write();

   return removeTodo;
}

async function editTodo(id_todo, title_todo) {
   const editTodo = await db
      .get('todos')
      .find({ id: id_todo.toString() })
      .assign({ title: title_todo })
      .write();

   return editTodo;
}

async function changeStatus(id_todo, status_todo) {
   const changeStatus = await db
      .get('todos')
      .find({ id: id_todo.toString() })
      .assign({ status: status_todo })
      .write();

   return changeStatus;
}

function allListTodo() {
   const allListTodo = db
      .get('todos')
      .sortBy('group')
      .value();

   return allListTodo;
}

function listTodoStatus(id_status) {
   const ListTodo = db
      .get('todos')
      .filter({ status: id_status })
      .sortBy('group')
      .value();

   return ListTodo;
}
function filterGroup(groupName) {
   const ListTodo = db
      .get('todos')
      .filter({ group: groupName })
      .sortBy('group')
      .value();

   return ListTodo;
}

function parseList(todo) {
   const gr = todo.hasOwnProperty('group') ? todo.group : '';
   const { id, title, status } = todo;

   return `${chalk.yellow('Id:')} ${id} , ${chalk.yellow('Title:')} ${title}, ${chalk.yellow(
      'Status:'
   )} ${status}, ${chalk.yellow('Group:')} ${gr}`;
}

function successLog(error) {
   const eLog = chalk.green(error);
   console.log(eLog);
}

function errorLog(error) {
   const eLog = chalk.red(error);
   console.log(eLog);
}

module.exports = {
   addTodo,
   removeTodo,
   removeAll,
   editTodo,
   changeStatus,
   allListTodo,
   listTodoStatus,
   filterGroup,
   parseList,
   successLog,
   errorLog
};
