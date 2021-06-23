require('colors');
const fs = require('fs');
const { strSplitAndReplace } = require('./strSplitAndReplace')
const { createDirectory } = require('./directoryManager')
const { writeNow } = require('./writeNow')

module.exports.create = (sampleText, fileName, replaceWord = '', directory = './') => {

    content = replaceWord ? strSplitAndReplace(replaceWord, sampleText) : sampleText

    let directory1;
    if (directory === './') {
        directory1 = `${process.cwd()}/${fileName}`;

        writeNow(directory1, content);
        console.log('Created successfuly'.green);

    } else {
        directory1 = `${process.cwd()}/${directory}`;

        if (!fs.existsSync(directory1)) {
            createDirectory(directory1)
            writeNow(`${directory1}/${fileName}`, content);
            console.log('Created successfuly'.green);

        } else if (fs.existsSync(directory1)) {
            writeNow(`${directory1}/${fileName}`, content);

            console.log('Created successfuly'.green);
        }
    }
}
