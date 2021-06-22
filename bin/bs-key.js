const program = require('commander');

const { 
  bangla
} = require('../src/test');

// import * as generate from "../generator";

program
  .command('test')
  .description('generate automatic test')
  .action(bangla);

program.parse(process.argv);
