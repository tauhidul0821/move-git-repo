const generateComponent = require('./generateComponent');
const generateController = require('./generateController');
const generateFormComponent = require('./generateFormComponent');
const generateService = require('./generateService');
const generateTemplate = require('./generateTemplate');
const generateGitIgnore = require('./generateGitIgnore');
const generateAuto = require('./generateAuto');
const bangla = require('../src/test');

module.exports = {
  ...generateComponent,
  ...generateController,
  ...generateFormComponent,
  ...generateService,
  ...generateTemplate,
  ...generateGitIgnore,
  ...generateAuto,
  ...bangla
};