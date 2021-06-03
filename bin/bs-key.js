const program = require('commander');

const { generateComponent,
  generateController,
  generateFormComponent,
  generateService,
  generateTemplate,
  generateGitIgnore,
  generateAuto
} = require('../generator');

// import * as generate from "../generator";

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
  .command('nc')
  .description('generate node controller')
  .action(generateController);

program
  .command('gi')
  .description('generate git ignore file')
  .action(generateGitIgnore);


program
  .command('test')
  .description('generate automatic test')
  .action(generateAuto);

program.parse(process.argv);
