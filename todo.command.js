const { strStatus, getStatusForID } = require('./config');
const {
   addTodo,
   removeTodo,
   editTodo,
   changeStatus,
   allListTodo,
   listTodoStatus,
   filterGroup,
   parseList,
   successLog,
   errorLog
} = require('./todo');
const chalk = require('chalk');

// tu zaimportowac metody

const addTodoCommand = {
   command: 'addTodo <todo> [group]',
   aliases: ['a'],
   describe: 'Add todo',
   handler: async ({ todo, group }) => {
      const todoObj = {
         title: todo,
         status: 1,
         group: group
      };

      await addTodo(todoObj);
      successLog(`Add todo: ${todoObj.title}`);
   }
};

const removeTodoCommand = {
   command: 'removeTodo <id>',
   aliases: ['r'],
   describe: 'Remove todo',
   handler: async ({ id }) => {
      const removeArray = await removeTodo(id);

      if (removeArray.length === 0) {
         errorLog(`Not found id : ${id}`);
      } else {
         successLog(`Removed for id : ${id}`);
      }
   }
};

const editTodoCommand = {
   command: 'editTodo <id> [subject]',
   aliases: ['e'],
   describe: 'Edit todo',
   handler: async ({ id, subject }) => {
      const editObject = await editTodo(id, subject);

      if (editObject.hasOwnProperty('id')) {
         successLog(`Edited id : ${id}`);
      } else {
         errorLog(`Not edited for id : ${id}`);
      }
   }
};

const changeStatusCommand = {
   command: 'changeStatus <id> <id_status>',
   aliases: ['c'],
   describe: `Change status item. Options: ${strStatus}`,
   handler: async ({ id, id_status }) => {
      if (getStatusForID(id_status).hasOwnProperty('id')) {
         const editObject = await changeStatus(id, id_status);

         if (editObject.hasOwnProperty('id')) {
            successLog(`Change status id : ${id}`);
         } else {
            errorLog(`Not changed status for id : ${id}`);
         }
      } else {
         errorLog(`Not found status : ${id_status}`);
      }
   }
};

const allListTodoCommand = {
   command: 'allListTodo',
   aliases: ['all'],
   describe: 'Show all todo list',
   handler: () => {
      console.log(chalk.bgGreen('List all todo:'));
      allListTodo().map(todo => {
         console.log(parseList(todo));
      });
   }
};

const activeListTodoCommand = {
   command: 'activeListTodo',
   aliases: ['act'],
   describe: 'Show active todo list',
   handler: () => {
      console.log(chalk.bgGreen('List active todo:'));
      listTodoStatus(1).map(todo => {
         console.log(parseList(todo));
      });
   }
};

const completedListTodoCommand = {
   command: 'completedListTodo',
   aliases: ['cmp'],
   describe: 'Show completed todo list',
   handler: () => {
      console.log(chalk.bgGreen('List completed todo:'));
      listTodoStatus(2).map(todo => {
         console.log(parseList(todo));
      });
   }
};

const filterGroupCommand = {
   command: 'filterGroup <group>',
   aliases: ['f'],
   describe: 'Filter for group',
   handler: ({ group }) => {
      console.log(chalk.bgGreen(`List todo for group: ${group}`));
      filterGroup(group).map(todo => {
         console.log(parseList(todo));
      });
   }
};

module.exports = module.exports = [
   addTodoCommand,
   removeTodoCommand,
   editTodoCommand,
   changeStatusCommand,
   allListTodoCommand,
   activeListTodoCommand,
   completedListTodoCommand,
   filterGroupCommand
];
