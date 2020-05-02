const generateComponent = require('./generateComponent');
const generateController = require('./generateController');
const generateFormComponent = require('./generateFormComponent');
const generateService = require('./generateService');
const generateTemplate = require('./generateTemplate');

module.exports = {
  ...generateComponent,
  ...generateController,
  ...generateFormComponent,
  ...generateService,
  ...generateTemplate
};