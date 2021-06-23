const program = require('commander');

const { test, testCommand } = require('../src/test');
const { generateGitIgnore,gitCommand } = require('../src/gitIgnore');
const { generateNodeCrud,nodeCommand } = require('../src/nodeCrud');

program
  .command(gitCommand)
  .description('generate git ignore file')
  .action(generateGitIgnore);

program
  .command(nodeCommand)
  .description('generate nodejs CRUD system')
  .action(generateNodeCrud);

program
  .command(testCommand)
  .description('generate automatic test')
  .action(test);

program.parse(process.argv);
