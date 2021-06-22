const create = require('./create');
const firstCharUpperCase = require('./firstCharUpperCase');
const strSplitAndReplace = require('./strSplitAndReplace');

module.exports = {
    ...create,
    ...firstCharUpperCase,
    ...strSplitAndReplace
};