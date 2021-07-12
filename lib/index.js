const create = require('./create');
const firstCharUpperCase = require('./firstCharUpperCase');
const strSplitAndReplace = require('./strSplitAndReplace');
const createDirectory = require('./directoryManager');
const writeNow = require('./writeNow');
const nameAndDirFromCmd = require('./nameAndDirFromCmd');
const getParts = require('./getParts');
const removeLoopWord = require('./replaceByWord');
const directoryFromCmd = require('./directoryFromCmd')
const nameFromCmd = require('./nameFromCmd');

module.exports = {
    ...create,
    ...firstCharUpperCase,
    ...strSplitAndReplace,
    ...createDirectory,
    ...writeNow,
    ...nameAndDirFromCmd,
    ...getParts,
    ...removeLoopWord,
    ...directoryFromCmd,
    ...nameFromCmd
};
