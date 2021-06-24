const create = require('./create');
const firstCharUpperCase = require('./firstCharUpperCase');
const strSplitAndReplace = require('./strSplitAndReplace');
const createDirectory = require('./directoryManager');
const writeNow = require('./writeNow');
const nameAndDirFromCmd = require('./nameAndDirFromCmd');

module.exports = {
    ...create,
    ...firstCharUpperCase,
    ...strSplitAndReplace,
    ...createDirectory,
    ...writeNow,
    ...nameAndDirFromCmd
};
