'use strict';
const colors = require('colors');
const fs = require('fs');
const { strSplitAndReplace } = require('./strSplitAndReplace')
const { createDirectory } = require('./directoryManager')
const { writeNow } = require('./writeNow')
const { getParts } = require('./getParts');
const { removeLoopWord, replaceProperty } = require('./replaceByWord');


module.exports.create = (sampleText, fileName, replace = '', directory = './') => {
    let replaceWord = haveReplaceWord(replace)

    let content = replaceWord ? strSplitAndReplace(replaceWord, sampleText) : sampleText

    if (content.includes('loop')) {
        let replaceStatement = getParts(sampleText)

        let newProperties = replaceProperty(replaceStatement, content)

        content = removeLoopWord(newProperties)
    }

    let directory1;
    if (directory === './') {
        directory1 = `${process.cwd()}/${fileName}`;

        writeNow(directory1, content);

        console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

    } else {

        directory1 = `${process.cwd()}/${directory}`;

        if (!fs.existsSync(directory1)) {
            createDirectory(directory1)
            writeNow(`${directory1}/${fileName}`, content);

            console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

        } else if (fs.existsSync(directory1)) {
            writeNow(`${directory1}/${fileName}`, content);

            console.log(colors.green(`Created successfuly ${fileName} at `), colors.underline.gray(`${directory1}/${fileName}`));

        }
    }
}

/**
 * haveReplaceWord menens create replace parameter have or not, if replace have space or enter remove here
 * @param replace is create parameter replace, if have space or enter this function remove them
 */
function haveReplaceWord(replace) {
    return replace.replace(/\n/gi, '').trim();
}
