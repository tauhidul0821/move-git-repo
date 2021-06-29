const colors = require('colors');
const fs = require('fs');
const { strSplitAndReplace } = require('./strSplitAndReplace')
const { createDirectory } = require('./directoryManager')
const { writeNow } = require('./writeNow')
const { getParts } = require('./getParts');

module.exports.create = (sampleText, fileName, replaceWord = '', directory = './') => {

    content = replaceWord ? strSplitAndReplace(replaceWord, sampleText) : sampleText

    if (content.includes('loop')) {
        let result = getParts(sampleText)
        console.log(result)

        const arr = process.argv;
        for (let i = 4; i < arr.length; i++) {
            const element = arr[i];
            console.log(element)
        }
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
