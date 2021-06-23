const create = require('./create');
const firstCharUpperCase = require('./firstCharUpperCase');
const strSplitAndReplace = require('./strSplitAndReplace');
const createDirectory = require('./directoryManager');
const writeNow = require('./writeNow');

module.exports = {
    ...create,
    ...firstCharUpperCase,
    ...strSplitAndReplace,
    ...createDirectory,
    ...writeNow
};
