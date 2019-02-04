const yargs = require('yargs');
const chalk = require('chalk');
const todoCommands = require('./todo.command');
const serverCommands = require('./server.command');

try {
   todoCommands.map(command => yargs.command(command));
   serverCommands.map(command => yargs.command(command));

   yargs
      .demandCommand()
      .help()
      .version(false).argv;
} catch (error) {
   console.log(chalk.red(`Error: ${error.message}`));
}
