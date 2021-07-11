const program = require('commander');

const { test, testCommand } = require('../src/test');
const { generateGitIgnore, gitCommand } = require('../src/gitIgnore');
const { generateNodeCrud, nodeCommand } = require('../src/nodeCrud');
const { generateIonicForm, ionicFormCommand } = require('../src/ionicForm');

program
  .command(gitCommand) // gi
  .description('generate git ignore file')
  .action(generateGitIgnore);

program
  .command(nodeCommand) // nodecrud
  .description('generate nodejs CRUD system')
  .action(generateNodeCrud);

program
  .command(testCommand) // test
  .description('generate automatic test')
  .action(test);

program
  .command(ionicFormCommand) // fc
  .description('generate ionic form')
  .action(generateIonicForm);

program.parse(process.argv);
