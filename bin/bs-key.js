const program = require('commander');

const { generateComponent,
  generateController,
  generateFormComponent,
  generateService,
  generateTemplate,
  testingFormComponent
} = require('../generator');


program
  .command('c')
  .description('create component')
  .action(generateComponent);

program
  .command('t')
  .description('create template')
  .action(generateTemplate);

program
  .command('fc')
  .description('generate form component')
  .action(generateFormComponent);


program
  .command('i')
  .description('generate form testing component')
  .action(testingFormComponent);




program.parse(process.argv);
