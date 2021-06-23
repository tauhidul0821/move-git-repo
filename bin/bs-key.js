const program = require('commander');

const { bangla } = require('../src/test');
const { generateGitIgnore } = require('../src/gitIgnore');

program
  .command('gi')
  .description('generate git ignore file')
  .action(generateGitIgnore);

program
  .command('test')
  .description('generate automatic test')
  .action(bangla);

program.parse(process.argv);
