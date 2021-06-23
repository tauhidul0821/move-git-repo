require('colors');
const fs = require('fs');
const { strSplitAndReplace } = require('./strSplitAndReplace')
const { createDirectory } = require('./directoryManager')
const { writeNow } = require('./writeNow')

module.exports.create = (sampleText, fileName, replaceWord = '', directory = './') => {

    originalContent = replaceWord ? strSplitAndReplace(replaceWord, sampleText) : sampleText

    // TODO:
    // here we need to do separate direcory and filename

    let directory1;
    // Directory manager
    if (directory === './') {
        directory1 = `${process.cwd()}/${fileName}`;

        // fs.writeFileSync(directory1, originalContent);

        writeNow(directory1, originalContent);
        console.log('Created successfuly'.green);

    } else {
        directory1 = `${process.cwd()}/${directory}`;

        if (!fs.existsSync(directory1)) {

            createDirectory(directory1)

            // fs.writeFileSync(`${directory1}/${fileName}`, originalContent);

            writeNow(`${directory1}/${fileName}`, originalContent);

            console.log('Created successfuly'.green);

        } else if (fs.existsSync(directory1)) {
            // fs.writeFileSync(`${directory1}/${fileName}`, originalContent);

            writeNow(`${directory1}/${fileName}`, originalContent);

            console.log('Created successfuly'.green);
        }
    }
}
