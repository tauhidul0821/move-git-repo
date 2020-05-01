const program = require('commander');
const gen = require('../commands/generateFunctions');

const { generateComponent,
  generateController,
  generateFormComponent,
  generateService,
  generateTemplate
} = require('../generator');


program
  .command('c')
  .description('create component')
  .action(generateComponent.generateComponent);

program
  .command('t')
  .description('create template')
  .action(generateTemplate.generateTemplate);

program
  .command('fc')
  .description('generate form component')
  .action(generateFormComponent.generateFormComponent);


program.parse(process.argv);
