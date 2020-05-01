const program = require('commander');
const gen = require('../commands/generateFunctions');

const { generateComponent,
  generateController,
  generateFormComponent,
  generateService,
  generateTemplate
} = require('../generator');


program
  .command('nc')
  .description('generate form component')
  .action(generateComponent.generateComponent);


program
  .command('c')
  .description('create component')
  .action(gen.genComponent);

program
  .command('t')
  .description('create template')
  .action(gen.genTemplate);

program
  .command('fc')
  .description('generate form component')
  .action(gen.genFormComponent);


program.parse(process.argv);
