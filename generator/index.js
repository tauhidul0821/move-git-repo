const generateComponent = require('./generateComponent');
const generateController = require('./generateController');
const generateFormComponent = require('./generateFormComponent');
const generateService = require('./generateService');
const generateTemplate = require('./generateTemplate');
const testingFormComponent = require('./testingFormComponent');

module.exports = {
  ...generateComponent,
  ...generateController,
  ...generateFormComponent,
  ...generateService,
  ...generateTemplate,
  ...testingFormComponent
};