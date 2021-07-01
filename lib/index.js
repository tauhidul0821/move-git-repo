const create = require('./create');
const firstCharUpperCase = require('./firstCharUpperCase');
const strSplitAndReplace = require('./strSplitAndReplace');
const createDirectory = require('./directoryManager');
const writeNow = require('./writeNow');
const nameAndDirFromCmd = require('./nameAndDirFromCmd');
const getParts = require('./getParts');
const removeLoopWord = require('./replaceByWord');

module.exports = {
    ...create,
    ...firstCharUpperCase,
    ...strSplitAndReplace,
    ...createDirectory,
    ...writeNow,
    ...nameAndDirFromCmd,
    ...getParts,
    ...removeLoopWord
};
