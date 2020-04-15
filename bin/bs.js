#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Generate api key')
  .alias('g')
  .parse(process.argv);