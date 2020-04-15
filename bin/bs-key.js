const program = require('commander');
const gen = require('../commands/generateFunctions');


program
  .command('c')
  .description('create component')
  .action(gen.genComponent);

program
  .command('t')
  .description('create template')
  .action(gen.genTemplate);

program.parse(process.argv);